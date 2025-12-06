import { ScrollView, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";

export default function UserRegistrationScreen() {
  const isDark = useColorScheme() === "dark";
  const styles = createStyles(isDark);

  const fields = [
    "Name",
    "Email",
    "Password",
    "Age",
    "Gender (optional)",
    "Lifestyle category",
    "Sleep/Health goals",
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Start your brain health journey</Text>

      {fields.map((label) => (
        <View key={label} style={styles.field}>
          <Text style={styles.fieldLabel}>{label}</Text>
          <TextInput
            placeholder={label}
            secureTextEntry={label === "Password"}
            placeholderTextColor={isDark ? "#6B7280" : "#9CA3AF"}
            style={styles.input}
          />
        </View>
      ))}

      <View style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </View>
    </ScrollView>
  );
}

function createStyles(isDark: boolean) {
  const bg = isDark ? "#0B0F19" : "#F3F4F6";
  const text = isDark ? "#FFFFFF" : "#111827";
  const sub = isDark ? "#9CA3AF" : "#6B7280";

  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: bg,
      minHeight: "100%",
    },
    title: {
      fontSize: 28,
      fontWeight: "800",
      color: text,
    },
    subtitle: {
      color: sub,
      marginBottom: 16,
    },
    field: {
      marginBottom: 14,
    },
    fieldLabel: {
      color: sub,
      marginBottom: 4,
    },
    input: {
      backgroundColor: isDark ? "#1A2332" : "#FFFFFF",
      borderRadius: 12,
      padding: 12,
      borderWidth: 1,
      borderColor: isDark ? "#2A3545" : "#E5E7EB",
      color: text,
    },
    button: {
      backgroundColor: "#2563EB",
      paddingVertical: 14,
      borderRadius: 12,
      marginTop: 20,
    },
    buttonText: {
      color: "#FFFFFF",
      textAlign: "center",
      fontWeight: "700",
      fontSize: 16,
    },
  });
}
