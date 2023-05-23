import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../src/components/screens/Home";
import Browse from "../src/components/screens/Browse";
import Settings from "../src/components/screens/Settings";
import ShopScreen from "../src/components/screens/ShopScreen";

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

import * as ROUTES from "../src/constants/routes";

import SettingsNavigator from "./SettingsNavigator";

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size = 20, focused }) => {
          let icon;

          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BROWSE_SCREEN) {
            icon = focused ? "card" : "card-outline";
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            icon = focused ? "settings" : "settings-outline";
          }

          return <Icon name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{ title: "Browse" }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={ShopScreen}
        options={{ title: "Shop" }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
