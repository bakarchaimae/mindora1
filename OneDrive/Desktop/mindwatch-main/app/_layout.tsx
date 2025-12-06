// app/_layout.tsx
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { auth } from "../app/firebase/config";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  // user = undefined -> en cours de chargement
  // user = null      -> pas connecté
  // user = User      -> connecté
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    return onAuthStateChanged(auth, u => setUser(u));
  }, []);

  // Splash Mindora pendant le chargement Firebase
  if (user === undefined) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashTitle}>Mindora</Text>
        <Text style={styles.splashSubtitle}>Initialisation...</Text>
        <ActivityIndicator size="large" color="#6B5BFF" style={{ marginTop: 20 }} />
      </View>
    );
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {user ? (
          // Utilisateur connecté -> onglets principaux
          <Stack.Screen name="(tabs)" />
        ) : (
          // Pas connecté -> écran Login
          <Stack.Screen name="LoginScreen" />
        )}
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F3FB",
  },
  splashTitle: {
    fontSize: 38,
    fontWeight: "800",
    color: "#3A2FA0",
  },
  splashSubtitle: {
    color: "#7D78A0",
    marginTop: 5,
    fontSize: 16,
  },
});
