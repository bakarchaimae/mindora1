import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function UserProfileScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  const sensors = ["EEG", "ECG", "Respiration"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.subtitle}>Personal info & sensor status</Text>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}>
          <Text style={styles.avatarInitial}>C</Text>
        </View>
        <Text style={styles.username}>Chaimae</Text>
        <Text style={styles.email}>chaimae@example.com</Text>
      </View>

      {/* Sensors */}
      <Text style={styles.sectionTitle}>Connected Sensors</Text>
      <View style={styles.sensorGrid}>
        {sensors.map((s) => (
          <View key={s} style={styles.sensorCard}>
            <Text style={styles.sensorName}>{s}</Text>
            <Text style={styles.sensorStatus}>Active</Text>
          </View>
        ))}
      </View>

      {/* Quick Access */}
      <Text style={styles.sectionTitle}>Quick Settings</Text>
      <View style={styles.quickRow}>
        <View style={styles.quickButton}>
          <Text style={styles.quickText}>Settings</Text>
        </View>
        <View style={styles.quickButton}>
          <Text style={styles.quickText}>Theme</Text>
        </View>
      </View>
      <View style={styles.quickRow}>
        <View style={styles.quickButton}>
          <Text style={styles.quickText}>Notifications</Text>
        </View>
        <View style={styles.quickButton}>
          <Text style={styles.quickText}>Data export</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function createStyles(isDark: boolean) {
  const text = isDark ? "#FFFFFF" : "#111827";
  const sub = isDark ? "#9CA3AF" : "#6B7280";

  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: isDark ? "#0B0F19" : "#F3F4F6",
      minHeight: "100%",
    },
    title: {
      fontSize: 28,
      fontWeight: "800",
      color: text,
    },
    subtitle: {
      color: sub,
      marginBottom: 20,
    },
    avatarWrapper: {
      alignItems: "center",
      marginBottom: 20,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: "#3B82F6",
      justifyContent: "center",
      alignItems: "center",
    },
    avatarInitial: {
      fontSize: 32,
      color: "#FFFFFF",
      fontWeight: "700",
    },
    username: {
      marginTop: 10,
      fontSize: 20,
      fontWeight: "700",
      color: text,
    },
    email: {
      marginTop: 4,
      color: sub,
    },
    sectionTitle: {
      marginTop: 20,
      marginBottom: 10,
      fontSize: 18,
      fontWeight: "700",
      color: text,
    },
    sensorGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
    },
    sensorCard: {
      flexBasis: "47%",
      padding: 14,
      borderRadius: 16,
      backgroundColor: isDark ? "#1A2332" : "#FFFFFF",
      borderWidth: 1,
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
    },
    sensorName: {
      fontSize: 14,
      color: text,
    },
    sensorStatus: {
      marginTop: 4,
      color: "#22C55E",
      fontWeight: "600",
    },
    quickRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 12,
    },
    quickButton: {
      flex: 1,
      padding: 14,
      borderRadius: 16,
      backgroundColor: isDark ? "#1A2332" : "#FFFFFF",
      borderWidth: 1,
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
      marginRight: 10,
    },
    quickText: {
      textAlign: "center",
      color: text,
      fontWeight: "600",
    },
  });
}
