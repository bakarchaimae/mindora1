import { StyleSheet, Text, View } from "react-native";
import MetricCard from "../components/MetricCard";

export default function DrivingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driving Mode</Text>

      <MetricCard
        title="ETA"
        value="14:32"
        unit=""
        status="Estimated arrival"
        color="#4A90E2"
      />

      <MetricCard
        title="Distance Left"
        value={42}
        unit="km"
        status="Route"
        color="#F97316"
      />

      <MetricCard
        title="Driver Fatigue"
        value={68}
        unit="%"
        status={68 > 60 ? "High" : "Normal"}
        color="#E11D48"
      />

      <View style={[styles.alertBox, { backgroundColor: "#FEE2E2" }]}>
        <Text style={styles.alertText}>
          ⚠ Sleep urgency detected. Consider taking a break.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FB", padding: 20 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 16 },
  alertBox: {
    marginTop: 20,
    padding: 14,
    borderRadius: 12,
  },
  alertText: { color: "#991B1B", fontWeight: "600" },
});
