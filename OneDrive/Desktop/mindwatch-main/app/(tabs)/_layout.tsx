import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2563EB",
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen name="index" options={{
        title: "Accueil",
        tabBarIcon: ({ color }) => <IconSymbol name="house.fill" size={28} color={color} />
      }}/>

      <Tabs.Screen name="sleep" options={{
        title: "Sommeil",
        tabBarIcon: ({ color }) => <IconSymbol name="bed.double.fill" size={28} color={color} />
      }}/>

      <Tabs.Screen name="eeg" options={{
        title: "EEG",
        tabBarIcon: ({ color }) => <IconSymbol name="waveform" size={28} color={color} />
      }}/>

      <Tabs.Screen name="alerts" options={{
        title: "Alertes",
        tabBarIcon: ({ color }) => <IconSymbol name="exclamationmark.triangle.fill" size={28} color={color} />
      }}/>

      <Tabs.Screen name="profile" options={{
        title: "Profil",
        tabBarIcon: ({ color }) => <IconSymbol name="person.fill" size={28} color={color} />
      }}/>
    </Tabs>
  );
}
