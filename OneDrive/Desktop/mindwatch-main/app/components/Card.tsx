import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ title, value, subtitle, children, bg, color }: any) {
  return (
    <View style={[styles.card, { backgroundColor: bg || "#FFFFFF" }]}>
      {title && <Text style={[styles.title, { color: color || "#111827" }]}>{title}</Text>}
      {value && <Text style={[styles.value, { color: color || "#111827" }]}>{value}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  title: { fontSize: 14, opacity: 0.7 },
  value: { fontSize: 24, marginTop: 6, fontWeight: "700" },
  subtitle: { marginTop: 4, opacity: 0.6 },
});
