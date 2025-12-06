import { StyleSheet, Text, View } from "react-native";

export default function MetricCard({ title, value, unit, status, color }) {
  return (
    <View style={styles.card}>
      {status && (
        <View style={[styles.badge, { backgroundColor: color + "22" }]}>
          <Text style={[styles.badgeText, { color }]}>{status}</Text>
        </View>
      )}

      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        <Text style={[styles.value, { color }]}>{value}</Text>
        {unit && <Text style={styles.unit}>{unit}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    elevation: 3,
  },
  badge: {
    alignSelf: "flex-end",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    marginBottom: 6,
  },
  badgeText: { fontSize: 11, fontWeight: "600" },
  title: { fontSize: 15, fontWeight: "600", color: "#1F2933" },
  row: { flexDirection: "row", alignItems: "flex-end", marginTop: 6 },
  value: { fontSize: 24, fontWeight: "700" },
  unit: { marginLeft: 4, fontSize: 14, color: "#6B7A8F" },
});
