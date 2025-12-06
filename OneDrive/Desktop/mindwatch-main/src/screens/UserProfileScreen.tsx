import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

export default function UserProfileScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER PROFILE CARD */}
      <LinearGradient
        colors={isDark ? ["#4F3CC9", "#7A5DFF"] : ["#A46CFF", "#DDA6FF"]}
        style={styles.headerCard}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitial}>C</Text>
          </View>
          <View>
            <Text style={styles.userName}>Chaimae</Text>
            <Text style={styles.userSub}>Votre espace bien-être</Text>
          </View>
        </View>
      </LinearGradient>

      {/* QUICK STATS */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Ionicons name="moon" size={26} color="#7A5DFF" />
          <Text style={styles.statValue}>7.2h</Text>
          <Text style={styles.statLabel}>Sommeil Moyen</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="pulse" size={26} color="#E86EFF" />
          <Text style={styles.statValue}>32%</Text>
          <Text style={styles.statLabel}>Stress Moyen</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="flame" size={26} color="#FF6B81" />
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Jours Suivis</Text>
        </View>
      </View>

      {/* OBJECTIF */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>🎯 Objectif personnel</Text>
        <Text style={styles.sectionText}>Améliorer la qualité du sommeil.</Text>
      </View>

      {/* SENSORS */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>🔌 Capteurs connectés</Text>

        <View style={styles.sensorGrid}>
          {["EEG", "ECG", "Respiration"].map((s) => (
            <View key={s} style={styles.sensorCard}>
              <Ionicons name="radio-outline" size={22} color="#22C55E" />
              <Text style={styles.sensorName}>{s}</Text>
              <Text style={styles.sensorStatus}>Actif</Text>
            </View>
          ))}
        </View>
      </View>

      {/* SETTINGS */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>⚙️ Paramètres</Text>

        {[
          "Modifier le profil",
          "Thème & Apparence",
          "Notifications",
          "Exportation des données",
        ].map((item) => (
          <View key={item} style={styles.optionRow}>
            <Text style={styles.optionLabel}>{item}</Text>
            <Text style={styles.optionArrow}>›</Text>
          </View>
        ))}

        <View style={styles.optionRow}>
          <Text style={[styles.optionLabel, { color: "#FF4E4E" }]}>
            Déconnexion
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

/* -------------------------------------------------------
   STYLE MINDORA — DÉSIGN PREMIUM
-------------------------------------------------------- */
function createStyles(isDark: boolean) {
  const bg = isDark ? "#0B0F19" : "#F7F8FC";
  const card = isDark ? "#1A2332" : "#FFFFFF";
  const text = isDark ? "#FFFFFF" : "#141414";
  const sub = isDark ? "#9CA3AF" : "#6B7280";

  return StyleSheet.create({
    container: {
      padding: 18,
      backgroundColor: bg,
    },

    /* HEADER */
    headerCard: {
      borderRadius: 22,
      padding: 20,
      marginBottom: 20,
      elevation: 4,
    },
    avatar: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: "#FFF",
      justifyContent: "center",
      alignItems: "center",
    },
    avatarInitial: {
      color: "#7A5DFF",
      fontSize: 32,
      fontWeight: "800",
    },
    userName: {
      color: "#FFF",
      fontSize: 22,
      fontWeight: "700",
    },
    userSub: {
      color: "#E9D7FF",
      marginTop: 3,
    },

    /* STATS */
    statsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 18,
    },
    statCard: {
      flex: 1,
      backgroundColor: card,
      padding: 14,
      borderRadius: 18,
      alignItems: "center",
      marginHorizontal: 5,
      elevation: 3,
    },
    statValue: {
      fontSize: 20,
      fontWeight: "700",
      color: text,
      marginTop: 6,
    },
    statLabel: {
      color: sub,
      fontSize: 12,
    },

    /* SECTIONS */
    sectionCard: {
      backgroundColor: card,
      padding: 18,
      borderRadius: 20,
      marginBottom: 20,
      elevation: 3,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: text,
      marginBottom: 10,
    },
    sectionText: {
      fontSize: 15,
      color: sub,
    },

    /* SENSORS */
    sensorGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    sensorCard: {
      width: "48%",
      backgroundColor: card,
      padding: 16,
      marginVertical: 6,
      borderRadius: 16,
      alignItems: "center",
      borderWidth: 1,
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
    },
    sensorName: {
      marginTop: 5,
      fontSize: 14,
      fontWeight: "600",
      color: text,
    },
    sensorStatus: {
      color: "#22C55E",
      marginTop: 3,
      fontWeight: "700",
    },

    /* OPTIONS */
    optionRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 12,
      borderBottomColor: isDark ? "#2A3545" : "#EEEEEE",
      borderBottomWidth: 1,
    },
    optionLabel: {
      color: text,
      fontSize: 16,
    },
    optionArrow: {
      color: sub,
      fontSize: 20,
    },
  });
}
