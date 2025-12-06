import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function DrivingModeScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  const status = [
    { label: "Fatigue", value: "Moderate", color: "#FACC15" },
    { label: "Attention", value: "Stable", color: "#22C55E" },
    { label: "Stress", value: "Low", color: "#38BDF8" },
    { label: "Micro-sleep risk", value: "Low", color: "#22C55E" },
  ];

  const timeline = [
    { label: "Now", level: "good" },
    { label: "+15m", level: "moderate" },
    { label: "+30m", level: "danger" },
    { label: "+45m", level: "moderate" },
    { label: "ETA", level: "good" },
  ];

  const levelColor = (lvl: string) => {
    switch (lvl) {
      case "good":
        return "#22C55E";
      case "moderate":
        return "#FACC15";
      case "danger":
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Driving Mode</Text>
      <Text style={styles.subtitle}>Real-time safety & brain monitoring</Text>

      {/* METRICS */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Estimated Time of Arrival</Text>
        <Text style={styles.cardValue}>14:32</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Distance Remaining</Text>
        <Text style={styles.cardValue}>128 km</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Safety Score</Text>
        <Text style={[styles.cardValue, { color: "#22C55E" }]}>86/100</Text>
      </View>

      {/* BRAIN STATUS */}
      <Text style={styles.sectionTitle}>Driver & Brain Status</Text>
      {status.map((s) => (
        <View key={s.label} style={styles.statusRow}>
          <View style={[styles.statusDot, { backgroundColor: s.color }]} />
          <Text style={styles.statusText}>
            {s.label}: <Text style={{ fontWeight: "700" }}>{s.value}</Text>
          </Text>
        </View>
      ))}

      {/* TIMELINE */}
      <Text style={styles.sectionTitle}>Road-aware Safety Timeline</Text>
      <View style={styles.timelineRow}>
        {timeline.map((t) => (
          <View key={t.label} style={styles.timelineItem}>
            <View
              style={[styles.timelineBar, { backgroundColor: levelColor(t.level) }]}
            />
            <Text style={styles.timelineLabel}>{t.label}</Text>
          </View>
        ))}
      </View>

      {/* ALERTS */}
      <Text style={styles.sectionTitle}>Alerts</Text>

      <View style={[styles.alertCard, { backgroundColor: "#FEE2E2" }]}>
        <Text style={styles.alertTitle}>⚠ Dangerous fatigue detected</Text>
        <Text style={styles.alertText}>
          Brain patterns indicate severe drowsiness.
        </Text>
        <Text style={styles.alertAction}>PULL OVER NOW</Text>
      </View>

      <View style={[styles.alertCard, { backgroundColor: "#FEF3C7" }]}>
        <Text style={styles.alertTitle}>Sleep urgency: HIGH</Text>
        <Text style={styles.alertText}>Micro-sleeps likely within 10 minutes.</Text>
        <Text style={styles.alertAction}>Find nearest rest stop</Text>
      </View>
    </ScrollView>
  );
}

function createStyles(isDark: boolean) {
  const text = isDark ? "#FFFFFF" : "#111827";
  const bg = isDark ? "#0B0F19" : "#F3F4F6";
  const card = isDark ? "#1A2332" : "#FFFFFF";

  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: bg,
      minHeight: "100%",
    },
    title: {
      fontSize: 28,
      fontWeight: "800",
      color: text,
    },
    subtitle: {
      fontSize: 13,
      color: "#9CA3AF",
      marginBottom: 20,
    },
    card: {
      backgroundColor: card,
      padding: 16,
      borderRadius: 16,
      marginBottom: 14,
      borderWidth: 1,
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
    },
    cardLabel: {
      color: "#9CA3AF",
      fontSize: 12,
    },
    cardValue: {
      marginTop: 8,
      fontSize: 22,
      fontWeight: "700",
      color: text,
    },
    sectionTitle: {
      marginTop: 20,
      marginBottom: 10,
      fontSize: 18,
      fontWeight: "700",
      color: text,
    },
    statusRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
    },
    statusDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: 8,
    },
    statusText: {
      fontSize: 14,
      color: text,
    },
    timelineRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom: 20,
    },
    timelineItem: {
      alignItems: "center",
      flex: 1,
    },
    timelineBar: {
      width: "90%",
      height: 16,
      borderRadius: 20,
    },
    timelineLabel: {
      marginTop: 6,
      fontSize: 10,
      color: "#9CA3AF",
    },
    alertCard: {
      padding: 14,
      borderRadius: 16,
      marginBottom: 12,
    },
    alertTitle: {
      fontWeight: "700",
      fontSize: 15,
      color: "#111827",
    },
    alertText: {
      marginTop: 4,
      color: "#4B5563",
    },
    alertAction: {
      marginTop: 6,
      fontWeight: "700",
      color: "#B91C1C",
    },
  });
}
