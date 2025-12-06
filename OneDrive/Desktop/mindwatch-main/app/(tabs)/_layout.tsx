import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#5A4BE7" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="sleep"
        options={{
          title: "Sommeil",
          tabBarIcon: ({ color }) => <Ionicons name="moon" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="eeg"
        options={{
          title: "EEG",
          tabBarIcon: ({ color }) => <Ionicons name="pulse" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: "Alertes",
          tabBarIcon: ({ color }) => <Ionicons name="alert" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <Ionicons name="person" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="driving"
        options={{
          title: "Driving",
          tabBarIcon: ({ color }) => <Ionicons name="car" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={26} color={color} />,
        }}
      />
    </Tabs>
  );
}
