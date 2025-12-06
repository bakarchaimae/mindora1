import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MetricBadge({ label, percent, color }: any) {
  return (
    <View style={[styles.badge, { backgroundColor: color + "22" }]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
      <Text style={[styles.percent, { color }]}>{percent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: "48%",
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  percent: {
    marginTop: 6,
    fontSize: 22,
    fontWeight: "800",
  },
});
