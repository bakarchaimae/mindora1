import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function SleepMonitoringScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sleep Monitoring</Text>
      <Text style={styles.subtitle}>How you slept last night</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Total Sleep</Text>
        <Text style={styles.cardValue}>6h 42m</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Sleep Quality</Text>
        <Text style={styles.cardValue}>82 / 100</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Awakenings</Text>
        <Text style={styles.cardValue}>3 times</Text>
      </View>
    </ScrollView>
  );
}

function createStyles(isDark: boolean) {
  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: isDark ? "#0B0F19" : "#F3F4F6",
      minHeight: "100%",
    },
    title: {
      fontSize: 28,
      fontWeight: "800",
      color: isDark ? "#FFFFFF" : "#111827",
    },
    subtitle: {
      marginTop: 4,
      fontSize: 14,
      color: isDark ? "#9CA3AF" : "#6B7280",
      marginBottom: 20,
    },
    card: {
      backgroundColor: isDark ? "#1A2332" : "#FFFFFF",
      padding: 16,
      borderRadius: 18,
      marginBottom: 16,
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
      borderWidth: 1,
    },
    cardLabel: {
      fontSize: 12,
      color: isDark ? "#9CA3AF" : "#6B7280",
    },
    cardValue: {
      marginTop: 6,
      fontSize: 20,
      fontWeight: "700",
      color: isDark ? "#FFFFFF" : "#111827",
    },
  });
}
