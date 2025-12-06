// src/screens/RegisterScreen.tsx
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { auth } from "../../app/firebase/config";

export default function RegisterScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      // redirection vers les tabs après inscription
      router.replace("/(tabs)");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.headerBox}>
        <Text style={styles.title}>Créer un compte</Text>
        <Text style={styles.subtitle}>Bienvenue chez Mindora</Text>
      </View>

      <View style={styles.card}>
        {error !== "" && <Text style={styles.error}>{error}</Text>}

        <TextInput
          placeholder="Adresse email"
          placeholderTextColor="#A7A3C2"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Mot de passe"
          placeholderTextColor="#A7A3C2"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <TextInput
          placeholder="Confirmer le mot de passe"
          placeholderTextColor="#A7A3C2"
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Créer le compte</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("../LoginScreen")}>
          <Text style={styles.link}>Déjà inscrit ? Se connecter</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F0FF",
    padding: 20,
    justifyContent: "center",
  },
  headerBox: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#3A2FA0",
  },
  subtitle: {
    fontSize: 16,
    color: "#7D78A0",
    marginTop: 5,
  },

  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#6B5BFF",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },

  input: {
    backgroundColor: "#F8F7FF",
    padding: 15,
    borderRadius: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#E0DDF7",
    marginBottom: 12,
    color: "#3A2FA0",
  },

  button: {
    backgroundColor: "#6B5BFF",
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 17,
  },

  error: {
    color: "#FF4B5C",
    marginBottom: 10,
    fontWeight: "600",
    textAlign: "center",
  },

  link: {
    marginTop: 15,
    textAlign: "center",
    color: "#6B5BFF",
    fontWeight: "600",
  },
});
