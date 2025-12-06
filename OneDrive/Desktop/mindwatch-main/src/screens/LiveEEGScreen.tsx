import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function LiveEEGScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Live EEG</Text>
      <Text style={styles.subtitle}>Real-time brainwave activity</Text>

      <View style={styles.graph}>
        {Array.from({ length: 32 }).map((_, i) => (
          <View
            key={i}
            style={[styles.bar, { height: (i % 6) * 8 + 20 }]}
          />
        ))}
      </View>
    </ScrollView>
  );
}

function createStyles(isDark: boolean) {
  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: isDark ? "#0B0F19" : "#F9FAFB",
    },
    title: {
      fontSize: 26,
      fontWeight: "800",
      color: isDark ? "#FFFFFF" : "#1F2937",
    },
    subtitle: {
      color: isDark ? "#9CA3AF" : "#6B7280",
      marginBottom: 20,
    },
    graph: {
      flexDirection: "row",
      alignItems: "flex-end",
      height: 120,
      backgroundColor: isDark ? "#1A2332" : "#FFFFFF",
      padding: 12,
      borderRadius: 14,
    },
    bar: {
      width: 6,
      backgroundColor: "#38BDF8",
      marginHorizontal: 3,
      borderRadius: 3,
    },
  });
}
