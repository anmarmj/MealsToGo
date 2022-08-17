/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SettingsNavigator } from "./settings.navigator";

import { LanguageContext } from "../language/language.context";
import { ThemeContext } from "styled-components/native";

import { RestaurantsContextProvider } from "../../services/resturants/resturants.context";
import { LocationsContextProvider } from "../../services/locations/locations.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

import { RestaurantsNavigator } from "./resturants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

export default function AppNavigator() {
  return (
    <>
      <MyTabs />
    </>
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
    <FavouritesContextProvider>
      <LocationsContextProvider>
        <RestaurantsContextProvider>
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
              component={SettingsNavigator}
              options={{ title: language.navigations.settings }}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationsContextProvider>
    </FavouritesContextProvider>
  );
}
