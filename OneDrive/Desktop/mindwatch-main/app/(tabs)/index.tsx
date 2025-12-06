import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { db } from "../../app/firebase/config";

const screenWidth = Dimensions.get("window").width;

interface UserStats {
  global: number;
  energy: number;
  recovery: number;
  sleepHours: number;
  fatigueTrend: number[];
  heartRateTrend: number[];
}

export default function HomeScreen() {
  const [stats, setStats] = useState<UserStats | null>(null);

useEffect(() => {
  const refStats = ref(db, "userStats/");

  console.log("➡️ Firebase DB object:", db); // Vérifie si Firebase est bien chargé

  return onValue(refStats, snap => {
    console.log("➡️ RAW SNAPSHOT:", snap);
    console.log("➡️ SNAPSHOT VALUE:", snap.val()); // Vérifie ce que Firebase renvoie

    setStats(snap.val());
  });
}, []);


  if (!stats) return <Text style={{ marginTop: 50 }}>Chargement...</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>MindOra</Text>
        <Text style={styles.headerSubtitle}>Bienvenue 👋</Text>

        <View style={styles.globalBox}>
          <Text style={styles.globalTitle}>État global</Text>
          <Text style={styles.globalValue}>{stats.global}%</Text>
          <Text style={styles.globalDesc}>Bon équilibre</Text>
        </View>
      </View>

      {/* QUICK SUMMARY */}
      <Text style={styles.sectionTitle}>Résumé rapide</Text>

      <View style={styles.row}>
        <Card label="Énergie" value={`${stats.energy}/10`} color="#7ED957" />
        <Card label="Récupération" value={`${stats.recovery}/10`} color="#5DA7F3" />
        <Card label="Sommeil" value={`${stats.sleepHours} h`} color="#D58FF8" />
      </View>

      {/* GRAPHE DE FATIGUE */}
      <Text style={styles.sectionTitle}>Niveau de fatigue</Text>

      <LineChart
        data={{
          labels: ["8h", "10h", "12h", "14h", "16h"],
          datasets: [{ data: stats.fatigueTrend }]
        }}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: () => "#FF6C37",
          labelColor: () => "#999",
        }}
        bezier
        style={styles.chart}
      />

      {/* GRAPHE CARDIAQUE */}
      <Text style={styles.sectionTitle}>Rythme cardiaque</Text>

      <LineChart
        data={{
          labels: ["8h", "10h", "12h", "14h", "16h"],
          datasets: [{ data: stats.heartRateTrend }]
        }}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: () => "#E63946",
          labelColor: () => "#999",
        }}
        bezier
        style={styles.chart}
      />

    </ScrollView>
  );
}

function Card({ label, value, color }: any) {
  return (
    <View style={[styles.card, { backgroundColor: color + "33" }]}>
      <Text style={[styles.cardLabel, { color }]}>{label}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#F4F5FA" },

  headerBox: {
    backgroundColor: "#5A3FFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  headerTitle: { color: "#fff", fontSize: 28, fontWeight: "800" },
  headerSubtitle: { color: "#ddd", fontSize: 16 },

  globalBox: {
    marginTop: 20,
    backgroundColor: "#ffffff22",
    padding: 15,
    borderRadius: 15
  },
  globalTitle: { color: "#eee", fontSize: 14 },
  globalValue: { color: "#fff", fontSize: 32, fontWeight: "700" },
  globalDesc: { color: "#dedede" },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    width: "32%",
    padding: 15,
    borderRadius: 15,
  },
  cardLabel: { fontSize: 14, fontWeight: "600" },
  cardValue: { fontSize: 20, fontWeight: "800", marginTop: 5 },

  chart: {
    borderRadius: 15,
    marginVertical: 10,
  },
});
