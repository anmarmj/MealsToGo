import React from "react";

import { RestaurantsScreen as Resturants } from "../../features/restaurants/screens/restaurants.screen";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Navigator() {
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
}

function ResturantsScreen() {
  return <Resturants />;
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TAB_ICONS = {
  Resturants: "restaurant",
  Map: "map",
  Settings: "settings-sharp",
};

const creatScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];

  return {
    tabBarIcon: ({ color }) => (
      <Ionicons name={iconName} size={32} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={creatScreenOptions}>
      <Tab.Screen name="Resturants" component={ResturantsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
