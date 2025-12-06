import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function BrainDashboardScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  const metrics = [
    { label: "Fatigue", value: "Moderate", color: "#FACC15" },
    { label: "Stress", value: "Low", color: "#22C55E" },
    { label: "Cognitive Load", value: "Balanced", color: "#38BDF8" },
    { label: "Migraine Risk", value: "Elevated", color: "#8B5CF6" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Brain Status</Text>
      <Text style={styles.subtitle}>Your neural health summary</Text>

      <View style={styles.metricGrid}>
        {metrics.map((m) => (
          <View key={m.label} style={styles.card}>
            <Text style={styles.cardLabel}>{m.label}</Text>
            <Text style={[styles.cardValue, { color: m.color }]}>{m.value}</Text>
          </View>
        ))}
      </View>

      {/* MINI EEG BAR */}
      <Text style={styles.sectionTitle}>Mini EEG</Text>
      <View style={styles.eegCard}>
        <View style={styles.eegRow}>
          {Array.from({ length: 24 }).map((_, i) => (
            <View
              key={i}
              style={[styles.eegBar, { height: 10 + ((i * 3) % 20) }]}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

function createStyles(isDark: boolean) {
  const text = isDark ? "#FFFFFF" : "#111827";

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
      marginBottom: 20,
      color: "#9CA3AF",
    },
    metricGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
    },
    card: {
      flexBasis: "47%",
      padding: 14,
      backgroundColor: isDark ? "#1A2332" : "#FFFFFF",
      borderRadius: 16,
      borderWidth: 1,
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
    },
    cardLabel: {
      color: "#9CA3AF",
      fontSize: 12,
    },
    cardValue: {
      marginTop: 8,
      fontSize: 20,
      fontWeight: "700",
    },
    sectionTitle: {
      marginTop: 20,
      marginBottom: 6,
      fontWeight: "700",
      fontSize: 18,
      color: text,
    },
    eegCard: {
      padding: 12,
      backgroundColor: isDark ? "#1A2332" : "#FFFFFF",
      borderRadius: 16,
      borderWidth: 1,
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
    },
    eegRow: {
      flexDirection: "row",
      alignItems: "flex-end",
      height: 80,
    },
    eegBar: {
      width: 6,
      backgroundColor: "#38BDF8",
      marginHorizontal: 3,
      borderRadius: 4,
    },
  });
}
