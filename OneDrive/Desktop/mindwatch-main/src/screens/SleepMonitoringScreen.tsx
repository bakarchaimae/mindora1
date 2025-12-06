import { db } from "@/app/firebase/config";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";

interface SleepData {
  lastNightScore: number;
  duration: string;
  awakenings: number;
  deep: number;
  rem: number;
  light: number;
  stagesTrend: number[];
}

export default function SleepMonitoringScreen() {
  const [sleep, setSleep] = useState<SleepData | null>(null);

  useEffect(() => {
    const sleepRef = ref(db, "sleepDetails/");
    return onValue(sleepRef, snap => setSleep(snap.val()));
  }, []);

  if (!sleep)
    return <Text style={{ margin: 20 }}>Chargement des données...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Qualité du Sommeil</Text>
      <Text style={styles.subtitle}>Données détaillées de la dernière nuit</Text>

      {/* SCORE CARD */}
      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>Score Global</Text>
        <Text style={styles.scoreValue}>{sleep.lastNightScore} %</Text>
      </View>

      {/* QUICK STATS */}
      <Text style={styles.section}>Résumé Rapide</Text>
      {quick("Durée totale", sleep.duration)}
      {quick("Réveils nocturnes", String(sleep.awakenings))}
      {quick("Sommeil profond", `${sleep.deep} h`)}
      {quick("Sommeil léger", `${sleep.light} h`)}
      {quick("Sommeil REM", `${sleep.rem} h`)}

      {/* PHASES BAR CHART */}
      <Text style={styles.section}>Phases observées</Text>
      <BarChart
        data={{
          labels: ["1", "2", "3", "4", "5", "6"],
          datasets: [{ data: sleep.stagesTrend }]
        }}
        width={Dimensions.get("window").width - 20}
        height={220}
        style={styles.chart}
        chartConfig={chartConfig("#6B5BFF")}
      />

      {/* EVOLUTION LINE CHART */}
      <Text style={styles.section}>Évolution du sommeil</Text>
      <LineChart
        data={{
          labels: ["23h", "00h", "02h", "04h", "06h"],
          datasets: [{ data: sleep.stagesTrend }]
        }}
        width={Dimensions.get("window").width - 20}
        height={220}
        bezier
        style={styles.chart}
        chartConfig={chartConfig("#FF6AD5")}
      />

      {/* TIPS */}
      <Text style={styles.section}>Conseils Personnalisés</Text>
      {quick("Hydratation", "Boire un verre d’eau avant de dormir")}
      {quick("Routine", "Éviter les écrans 30 min avant de se coucher")}
      {quick("Respiration", "Faire 5 minutes d’exercices relaxants")}
    </ScrollView>
  );
}

const quick = (label: string, value: string) => (
  <View style={styles.quickCard}>
    <Text style={styles.quickLabel}>{label}</Text>
    <Text style={styles.quickValue}>{value}</Text>
  </View>
);

const chartConfig = (color: string) => ({
  backgroundGradientFrom: "#FFF",
  backgroundGradientTo: "#FFF",
  decimalPlaces: 0,
  color: () => color,
  labelColor: () => "#666"
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F4FA", padding: 10 },
  header: { fontSize: 30, fontWeight: "700", color: "#3A2FA0" },
  subtitle: { fontSize: 15, color: "#837FA0", marginBottom: 20 },

  section: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    color: "#3A2FA0"
  },

  scoreCard: {
    backgroundColor: "#6B5BFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 10
  },
  scoreLabel: { color: "#EAE8FF", fontSize: 16 },
  scoreValue: { color: "white", fontSize: 40, fontWeight: "700" },

  quickCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    borderLeftWidth: 6,
    borderLeftColor: "#6B5BFF"
  },
  quickLabel: { color: "#888" },
  quickValue: { fontSize: 22, fontWeight: "700", color: "#333" },

  chart: { borderRadius: 15 }
});
