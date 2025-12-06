import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function SleepPhasesScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  const phases = [
    { name: "Awake", percent: 8, color: "#EF4444" },
    { name: "Light", percent: 45, color: "#FACC15" },
    { name: "Deep", percent: 30, color: "#2563EB" },
    { name: "REM", percent: 17, color: "#8B5CF6" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sleep Phases</Text>
      <Text style={styles.subtitle}>EEG-based sleep segmentation</Text>

      {phases.map((phase) => (
        <View key={phase.name} style={styles.card}>
          <View style={[styles.dot, { backgroundColor: phase.color }]} />
          <Text style={styles.cardLabel}>{phase.name}</Text>
          <Text style={styles.cardValue}>{phase.percent}%</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function createStyles(isDark: boolean) {
  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: isDark ? "#0B0F19" : "#F3F4F6",
    },
    title: {
      fontSize: 28,
      fontWeight: "800",
      color: isDark ? "#FFFFFF" : "#111827",
    },
    subtitle: {
      marginBottom: 16,
      color: isDark ? "#9CA3AF" : "#6B7280",
    },
    card: {
      backgroundColor: isDark ? "#1A2332" : "#FFFFFF",
      padding: 14,
      borderRadius: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
    },
    dot: {
      width: 14,
      height: 14,
      borderRadius: 7,
      marginBottom: 6,
    },
    cardLabel: {
      fontSize: 14,
      color: isDark ? "#D1D5DB" : "#374151",
    },
    cardValue: {
      fontSize: 20,
      fontWeight: "700",
      color: isDark ? "#FFFFFF" : "#111827",
    },
  });
}
