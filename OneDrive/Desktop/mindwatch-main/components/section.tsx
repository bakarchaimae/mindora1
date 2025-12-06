import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Section({ children }: any) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 10,
    color: "#111827",
  },
});
