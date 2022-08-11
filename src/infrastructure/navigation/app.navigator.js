/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LanguageContext } from "../language/language.context";
import { ThemeContext } from "styled-components/native";
import { RestaurantsNavigator } from "./resturants.navigator";

export default function AppNavigator() {
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
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

function MyTabs() {
  const { language } = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);
  const Tab = createBottomTabNavigator();

  const TAB_ICONS = {
    Resturants: "restaurant",
    Map: "map",
    Settings: "settings-sharp",
  };

  const creatScreenOptions = ({ route }) => {
    const iconName = TAB_ICONS[route.name];
    //console.log("font:", props.theme.fonts.heading);
    return {
      tabBarIcon: ({ color }) => (
        <Ionicons name={iconName} size={32} color={color} />
      ),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      tabBarLabelStyle: {
        fontSize: 10,
        fontFamily: themeContext.fonts.heading,
      },
    };
  };

  return (
    <Tab.Navigator screenOptions={creatScreenOptions}>
      <Tab.Screen
        name="Resturants"
        component={RestaurantsNavigator}
        options={{ title: language.navigations.resturants }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ title: language.navigations.map }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: language.navigations.settings }}
      />
    </Tab.Navigator>
  );
}
