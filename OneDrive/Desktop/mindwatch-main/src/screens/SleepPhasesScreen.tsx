import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { db } from "../firebase/config";

interface SleepPhaseData {
  deep: number;
  light: number;
  rem: number;
}

export default function SleepPhasesScreen() {
  const [phases, setPhases] = useState<SleepPhaseData | null>(null);

  useEffect(() => {
    const sleepRef = ref(db, "sleepDetails/");
    return onValue(sleepRef, snap => {
      const val = snap.val();
      if (val) {
        setPhases({
          deep: val.deep ?? 0,
          light: val.light ?? 0,
          rem: val.rem ?? 0
        });
      }
    });
  }, []);

  if (!phases) {
    return <Text style={{ margin: 20 }}>Chargement...</Text>;
  }

  const total = phases.deep + phases.light + phases.rem || 1;
  const pieData = [
    {
      name: "Profond",
      value: phases.deep,
      color: "#6B5BFF",
      legendFontColor: "#555",
      legendFontSize: 14
    },
    {
      name: "Léger",
      value: phases.light,
      color: "#4BC0C0",
      legendFontColor: "#555",
      legendFontSize: 14
    },
    {
      name: "REM",
      value: phases.rem,
      color: "#FF6AD5",
      legendFontColor: "#555",
      legendFontSize: 14
    }
  ];

  const pct = (v: number) => Math.round((v / total) * 100);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Phases du Sommeil</Text>
      <Text style={styles.subtitle}>Répartition de la dernière nuit</Text>

      <PieChart
        data={pieData.map(d => ({
          name: d.name,
          population: d.value,
          color: d.color,
          legendFontColor: d.legendFontColor,
          legendFontSize: d.legendFontSize
        }))}
        width={Dimensions.get("window").width - 20}
        height={260}
        chartConfig={{
          backgroundGradientFrom: "#FFF",
          backgroundGradientTo: "#FFF",
          color: () => "#000"
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="10"
        style={{ marginVertical: 10 }}
      />

      <Text style={styles.section}>Détails</Text>

      {phaseCard("Sommeil profond", phases.deep, pct(phases.deep), "#6B5BFF")}
      {phaseCard("Sommeil léger", phases.light, pct(phases.light), "#4BC0C0")}
      {phaseCard("Sommeil REM", phases.rem, pct(phases.rem), "#FF6AD5")}
    </ScrollView>
  );
}

const phaseCard = (
  label: string,
  hours: number,
  percent: number,
  color: string
) => (
  <View style={[styles.card, { borderLeftColor: color }]}>
    <Text style={styles.cardLabel}>{label}</Text>
    <Text style={styles.cardValue}>
      {hours.toFixed(1)} h • {percent}%
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F4FA", padding: 10 },
  header: { fontSize: 28, fontWeight: "700", color: "#3A2FA0" },
  subtitle: { color: "#837FA0", marginBottom: 15 },
  section: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    color: "#3A2FA0"
  },
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    borderLeftWidth: 5
  },
  cardLabel: { color: "#777" },
  cardValue: { fontSize: 18, fontWeight: "700", color: "#333" }
});
