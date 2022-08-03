import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FlatList } from "react-native";
import { RestaurantsContext } from "../../../services/resturants/resturants.context";
import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from "./restaurants.styles";

const renderItem = ({ item }) => (
  <RestaurantListContainer>
    <RestaurantInfoCard restaurant={item} />
  </RestaurantListContainer>
);

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <FlatList
        data={restaurantContext.restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};
