import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { ResturantDetailsScreen } from "../../features/restaurants/screens/resturant-deatails.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={creatScreenOptions}>
      <RestaurantStack.Screen name="Restuarnt" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={ResturantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};

const creatScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    ...TransitionPresets.ModalPresentationIOS,
  };
};
