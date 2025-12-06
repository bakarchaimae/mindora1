import { StyleSheet, Text, View } from "react-native";
import MetricCard from "../components/MetricCard";

export default function SleepScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleep Overview</Text>

      <MetricCard
        title="Total Sleep"
        value="6h 42m"
        unit=""
        status="Last Night"
        color="#4A90E2"
      />

      <MetricCard
        title="Sleep Score"
        value={82}
        unit="/100"
        status="Good"
        color="#22A06B"
      />

      <Text style={styles.section}>Sleep Timeline</Text>
      <View style={styles.timeline}>
        <Text style={styles.placeholder}>Light / Deep / REM placeholder</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FB", padding: 20 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 16 },
  section: { marginTop: 24, fontSize: 18, fontWeight: "600" },
  timeline: {
    marginTop: 10,
    height: 140,
    borderRadius: 16,
    backgroundColor: "#E5EBFF",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: { color: "#6B7A8F" },
});
