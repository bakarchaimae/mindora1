import { onValue, ref } from "firebase/database";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Section from "../components/Section";
import { db } from "../firebase/config";
import { useRealtimeStats } from "../hooks/useRealtimeStats";

export default function Home() {
  const stats = useRealtimeStats();

  const global = stats?.global;
  const quick = stats?.quickSummary;
  const fatigueTrend: number[] = stats?.fatigueTrend ?? [30, 55, 45, 70, 40, 65];
  const stressTrend: number[] = stats?.stressTrend ?? [20, 40, 35, 60, 30, 50];
  const sleep = stats?.sleep;
  const advice = stats?.advice ?? [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER GRADIENT-LIKE */}
      <View style={styles.headerCard}>
        <View>
          <Text style={styles.appName}>MindOra</Text>
          <Text style={styles.appSubtitle}>{global?.mood ?? "Bienvenue"}</Text>
        </View>
        <View style={styles.profileCircle} />
      </View>

      {/* GLOBAL SCORE */}
      <View style={styles.globalRow}>
        <Card
          title="État global"
          value={`${global?.score ?? 80}%`}
          subtitle={global?.status ?? "Bon équilibre"}
          bg="#EEF2FF"
          color="#4F46E5"
        />
      </View>

      {/* RÉSUMÉ RAPIDE */}
      <Section>Résumé rapide</Section>
      <View style={styles.quickRow}>
        <Card
          title="Énergie"
          value={`${quick?.energyScore ?? 8}/10`}
          bg="#ECFDF5"
          color="#16A34A"
        />
        <Card
          title="Récupération"
          value={`${quick?.recoveryScore ?? 7}/10`}
          bg="#EFF6FF"
          color="#2563EB"
        />
        <Card
          title="Sommeil"
          value={`${quick?.sleepHours ?? 7} h`}
          bg="#FDF2FF"
          color="#A855F7"
        />
      </View>

      {/* NIVEAU DE FATIGUE – bar chart simple */}
      <Section>Niveau de fatigue</Section>
      <Card subtitle="Sur la journée">
        <View style={styles.barChart}>
          {fatigueTrend.map((v, i) => (
            <View key={i} style={[styles.bar, { height: v * 1.2 }]} />
          ))}
        </View>
      </Card>

      {/* NIVEAU DE STRESS – line (en barres fines) */}
      <Section>Niveau de stress</Section>
      <Card subtitle="Tendance récente">
        <View style={styles.stressRow}>
          {stressTrend.map((v, i) => (
            <View key={i} style={[styles.stressDot, { height: v }]} />
          ))}
        </View>
      </Card>

      {/* QUALITÉ DU SOMMEIL */}
      <Section>Qualité du sommeil</Section>
      <Card
        title={sleep?.duration ?? "7h 23m"}
        value={`${sleep?.qualityScore ?? 82}%`}
        subtitle={`Efficacité: ${sleep?.efficiency ?? 92}%  • Profond: ${sleep?.deep ?? 2.3}h  REM: ${
          sleep?.rem ?? 1.5
        }h`}
        bg="#EEF2FF"
        color="#4C1D95"
      />

      {/* CONSEILS PERSONNALISÉS */}
      <Section>Conseils personnalisés</Section>
      {advice.map((a: any) => (
        <View
          key={a.id}
          style={[
            styles.adviceCard,
            a.level === "high"
              ? styles.adviceHigh
              : a.level === "medium"
              ? styles.adviceMedium
              : styles.adviceInfo,
          ]}
        >
          <Text style={styles.adviceTitle}>{a.title}</Text>
          <Text style={styles.adviceText}>{a.description}</Text>
        </View>
      ))}

      {/* ESPACE BAS de page */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F9FAFB",
  },

  /* HEADER */
  headerCard: {
    padding: 16,
    borderRadius: 20,
    backgroundColor: "#4F46E5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  appName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },
  appSubtitle: {
    color: "#E5E7EB",
    marginTop: 4,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#A5B4FC",
  },

  globalRow: {
    marginTop: 8,
  },

  quickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  /* FATIGUE BAR CHART */
  barChart: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 120,
    justifyContent: "space-between",
  },
  bar: {
    width: 16,
    borderRadius: 8,
    backgroundColor: "#F97316",
  },

  /* STRESS TREND */
  stressRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 80,
  },
  stressDot: {
    width: 8,
    marginHorizontal: 4,
    borderRadius: 4,
    backgroundColor: "#EF4444",
  },

  /* ADVICE */
  adviceCard: {
    padding: 14,
    borderRadius: 16,
    marginBottom: 10,
  },
  adviceTitle: {
    fontWeight: "700",
    marginBottom: 4,
    color: "#111827",
  },
  adviceText: {
    color: "#374151",
  },
  adviceInfo: {
    backgroundColor: "#E0F2FE",
  },
  adviceMedium: {
    backgroundColor: "#FEF9C3",
  },
  adviceHigh: {
    backgroundColor: "#FEE2E2",
  },
});

useEffect(() => {
  const testRef = ref(db, "test");

  onValue(testRef, (snapshot) => {
    console.log("🔥 Firebase says:", snapshot.val());
  });
}, []);
