import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { db } from "../firebase/config";

interface DrivingData {
  fatigue: number;
  attention: number;
  stress: number;
  eta: string;
  distanceKm: number;
  safetyTrend: number[];
}

export default function DrivingModeScreen() {
  const [drive, setDrive] = useState<DrivingData | null>(null);

  useEffect(() => {
    const refDrive = ref(db, "driving/");
    return onValue(refDrive, snap => setDrive(snap.val()));
  }, []);

  if (!drive) {
    return <Text style={{ margin: 20 }}>Préparation du mode conduite...</Text>;
  }

  const status =
    drive.fatigue > 75
      ? "Danger : arrête-toi immédiatement"
      : drive.fatigue > 55
      ? "Fatigue élevée : prends une pause"
      : drive.attention < 50
      ? "Attention faible : reste concentré"
      : "Conduite stable";

  const statusColor =
    drive.fatigue > 75 ? "#FF4B5C" : drive.fatigue > 55 ? "#FF9F40" : "#4BC0C0";

  const gaugeCard = (label: string, value: number, color: string) => (
    <View style={[styles.gaugeCard, { borderLeftColor: color }]} key={label}>
      <Text style={styles.gaugeLabel}>{label}</Text>
      <Text style={styles.gaugeValue}>{value}%</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Mode Conduite</Text>
      <Text style={styles.subtitle}>Surveillance EEG & comportement</Text>

      {/* GLOBAL STATUS */}
      <View style={[styles.statusCard, { backgroundColor: statusColor + "22" }]}>
        <Text style={[styles.statusTitle, { color: statusColor }]}>État actuel</Text>
        <Text style={styles.statusText}>{status}</Text>
        <Text style={styles.statusInfo}>
          ETA : {drive.eta} • Distance restante : {drive.distanceKm} km
        </Text>
      </View>

      {/* GAUGES */}
      <Text style={styles.section}>Niveaux en temps réel</Text>

      {gaugeCard("Fatigue", drive.fatigue, "#FF6B81")}
      {gaugeCard("Attention", drive.attention, "#6B5BFF")}
      {gaugeCard("Stress", drive.stress, "#FF9F40")}

      {/* SAFETY TREND */}
      <Text style={styles.section}>Score de sécurité</Text>

      <LineChart
        data={{
          labels: drive.safetyTrend.map((_, i) => String(i + 1)),
          datasets: [{ data: drive.safetyTrend }]
        }}
        width={Dimensions.get("window").width - 20}
        height={220}
        bezier
        style={styles.chart}
        chartConfig={{
          backgroundGradientFrom: "#FFF",
          backgroundGradientTo: "#FFF",
          decimalPlaces: 0,
          color: () => "#6B5BFF",
          labelColor: () => "#777"
        }}
      />

      {/* SUGGESTED ACTIONS */}
      <Text style={styles.section}>Actions recommandées</Text>
      <View style={styles.actionCard}>
        <Text style={styles.actionTitle}>Pause recommandée</Text>
        <Text style={styles.actionText}>
          Si tu ressens de la somnolence ou un manque de focus, arrête-toi sur une aire de repos
          pendant 10 minutes.
        </Text>
      </View>
      <View style={styles.actionCard}>
        <Text style={styles.actionTitle}>Respiration guidée</Text>
        <Text style={styles.actionText}>
          2 minutes de respiration profonde peuvent réduire le stress et améliorer ton attention.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F3FB", padding: 10 },
  header: { fontSize: 28, fontWeight: "700", color: "#3A2FA0" },
  subtitle: { color: "#837FA0", marginBottom: 15 },

  section: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    color: "#3A2FA0"
  },

  statusCard: {
    padding: 18,
    borderRadius: 18,
    marginBottom: 20
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6
  },
  statusText: { fontSize: 16, fontWeight: "600", color: "#333" },
  statusInfo: { color: "#666", marginTop: 4 },

  gaugeCard: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    borderLeftWidth: 5
  },
  gaugeLabel: { color: "#777" },
  gaugeValue: { fontSize: 22, fontWeight: "700", color: "#333" },

  chart: { borderRadius: 18 },

  actionCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10
  },
  actionTitle: { fontWeight: "700", fontSize: 16, color: "#3A2FA0" },
  actionText: { color: "#555", marginTop: 4 }
});
