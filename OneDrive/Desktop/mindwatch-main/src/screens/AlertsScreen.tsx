import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function AlertsScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  const alerts = [
    {
      title: "Dangerous fatigue detected",
      time: "Just now",
      color: "#FEE2E2",
      action: "Pull over now",
    },
    {
      title: "High migraine risk",
      time: "5 minutes ago",
      color: "#FDE68A",
      action: "Reduce brightness",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Alerts</Text>
      <Text style={styles.subtitle}>Your latest health warnings</Text>

      {alerts.map((alert, idx) => (
        <View key={idx} style={[styles.alertCard, { backgroundColor: alert.color }]}>
          <Text style={styles.alertTitle}>{alert.title}</Text>
          <Text style={styles.alertTime}>{alert.time}</Text>
          <Text style={styles.alertAction}>{alert.action}</Text>
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
      color: "#9CA3AF",
      marginBottom: 20,
    },
    alertCard: {
      padding: 16,
      borderRadius: 18,
      marginBottom: 14,
    },
    alertTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: "#111827",
    },
    alertTime: {
      marginTop: 4,
      color: "#4B5563",
    },
    alertAction: {
      marginTop: 8,
      color: "#B91C1C",
      fontWeight: "700",
    },
  });
}
