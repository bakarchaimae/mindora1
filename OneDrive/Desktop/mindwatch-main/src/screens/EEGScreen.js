import { StyleSheet, Text, View } from "react-native";

export default function EEGScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EEG Monitor</Text>

      <View style={styles.box}>
        <Text style={styles.placeholder}>EEG signal graph placeholder</Text>
      </View>

      <View style={styles.bandRow}>
        <Text>Delta: 18%</Text>
        <Text>Theta: 24%</Text>
        <Text>Alpha: 32%</Text>
      </View>
      <View style={styles.bandRow}>
        <Text>Beta: 62%</Text>
        <Text>Gamma: 28%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#050711" },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  box: {
    backgroundColor: "#0E1117",
    borderRadius: 16,
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1A1F27",
  },
  placeholder: { color: "#6B7280" },
  bandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingHorizontal: 4,
  },
});
