import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  label: string;
  percent: number;
  color: string;
}

export default function MetricBadge({ label, percent, color }: Props) {
  return (
    <View style={[styles.badge, { backgroundColor: color + "22" }]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
      <Text style={[styles.percent, { color }]}>{percent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    padding: 16,
    borderRadius: 18,
    width: "48%",
    marginBottom: 12,
  },
  label: { fontSize: 14, fontWeight: "600" },
  percent: { marginTop: 6, fontSize: 20, fontWeight: "800" },
});
