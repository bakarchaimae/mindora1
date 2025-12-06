import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function SensorsStatusScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  const sensors = [
    { name: "EEG", status: "Active", value: "Signal 93%" },
    { name: "ECG", status: "Active", value: "72 bpm" },
    { name: "Respiration", status: "Calibrating", value: "..." },
    { name: "Temperature", status: "Disconnected", value: "--" },
  ];

  const color = (status: string) => {
    switch (status) {
      case "Active":
        return "#22C55E";
      case "Calibrating":
        return "#FACC15";
      default:
        return "#EF4444";
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sensors</Text>
      <Text style={styles.subtitle}>Connection & health</Text>

      <View style={styles.sensorGrid}>
        {sensors.map((s) => (
          <View key={s.name} style={styles.card}>
            <Text style={styles.sensorName}>{s.name}</Text>
            <Text style={[styles.sensorStatus, { color: color(s.status) }]}>
              {s.status}
            </Text>
            <Text style={styles.sensorValue}>{s.value}</Text>
          </View>
        ))}
      </View>
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
      color: "#9CA3AF",
      marginBottom: 20,
    },
    sensorGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
    },
    card: {
      flexBasis: "47%",
      padding: 14,
      borderRadius: 16,
      backgroundColor: isDark ? "#1A2332" : "#FFFFFF",
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
      borderWidth: 1,
    },
    sensorName: {
      fontSize: 14,
      color: isDark ? "#FFFFFF" : "#111827",
      fontWeight: "700",
    },
    sensorStatus: {
      marginTop: 6,
      fontWeight: "700",
    },
    sensorValue: {
      marginTop: 6,
      color: "#6B7280",
    },
  });
}
