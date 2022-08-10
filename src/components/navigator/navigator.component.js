import React, { useContext } from "react";
import { RestaurantsScreen as Resturants } from "../../features/restaurants/screens/restaurants.screen";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LanguageContext } from "../../infrastructure/language/language.context";
import { ThemeContext } from "styled-components/native";
import { Cairo_600SemiBold } from "@expo-google-fonts/cairo";

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

const Tab = createBottomTabNavigator();
let themeContext;

function MyTabs() {
  const { language } = useContext(LanguageContext);
  themeContext = useContext(ThemeContext);

  return (
    <Tab.Navigator screenOptions={creatScreenOptions}>
      <Tab.Screen
        name="Resturants"
        component={ResturantsScreen}
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
