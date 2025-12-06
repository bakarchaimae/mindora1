import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useRealtimeData from "../hooks/useRealtimeData";

export default function LiveEEGScreen() {
  const data = useRealtimeData();

  if (!data) return <Text>Chargement...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EEG Temps Réel</Text>

      <Text>Delta: {data.delta.toFixed(1)}</Text>
      <Text>Theta: {data.theta.toFixed(1)}</Text>
      <Text>Low Alpha: {data.lowAlpha.toFixed(1)}</Text>
      <Text>High Alpha: {data.highAlpha.toFixed(1)}</Text>
      <Text>High Beta: {data.highBeta.toFixed(1)}</Text>
      <Text>High Gamma: {data.highGamma.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "700" },
});
