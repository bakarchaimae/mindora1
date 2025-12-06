import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../screens/DashboardScreen";
import EEGScreen from "../screens/EEGScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#4A90E2",
        tabBarInactiveTintColor: "#9AA4B2",
        tabBarStyle: { backgroundColor: "#FFFFFF" },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Dashboard: "grid",
            EEG: "activity",
          };
          return <Feather name={icons[route.name]} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="EEG" component={EEGScreen} />
    </Tab.Navigator>
  );
}
