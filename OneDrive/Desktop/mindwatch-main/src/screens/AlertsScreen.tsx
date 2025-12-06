import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { db } from "../../app/firebase/config";

type AlertLevel = "high" | "medium" | "low";

interface AlertItem {
  id: string;
  title: string;
  message: string;
  level: AlertLevel;
}

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  useEffect(() => {
    const alertsRef = ref(db, "alerts/");
    return onValue(alertsRef, snap => {
      const val = snap.val();
      if (!val) {
        setAlerts([]);
        return;
      }
      // val peut être un tableau ou un objet
      if (Array.isArray(val)) {
        setAlerts(val.filter(Boolean));
      } else {
        setAlerts(Object.values(val));
      }
    });
  }, []);

  const levelColor = (level: AlertLevel) => {
    switch (level) {
      case "high":
        return "#FF4B5C";
      case "medium":
        return "#FF9F40";
      default:
        return "#4BC0C0";
    }
  };

  const levelLabel = (level: AlertLevel) => {
    switch (level) {
      case "high":
        return "Critique";
      case "medium":
        return "Alerte";
      default:
        return "Info";
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Alertes</Text>
      <Text style={styles.subtitle}>Événements détectés par les capteurs</Text>

      {alerts.length === 0 && (
        <Text style={{ marginTop: 20, color: "#666" }}>
          Aucune alerte pour le moment 🎉
        </Text>
      )}

      {alerts.map(alert => {
        const c = levelColor(alert.level);
        return (
          <View
            key={alert.id}
            style={[styles.alertCard, { borderLeftColor: c, backgroundColor: c + "11" }]}
          >
            <Text style={[styles.alertLevel, { color: c }]}>
              {levelLabel(alert.level)}
            </Text>
            <Text style={styles.alertTitle}>{alert.title}</Text>
            <Text style={styles.alertMessage}>{alert.message}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F5FB", padding: 10 },
  header: { fontSize: 28, fontWeight: "700", color: "#3A2FA0" },
  subtitle: { color: "#837FA0", marginBottom: 15 },

  alertCard: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    borderLeftWidth: 5
  },
  alertLevel: {
    fontWeight: "700",
    fontSize: 13,
    textTransform: "uppercase"
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginTop: 4
  },
  alertMessage: {
    color: "#555",
    marginTop: 4
  }
});
