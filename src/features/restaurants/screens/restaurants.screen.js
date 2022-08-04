import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FlatList } from "react-native";
import { RestaurantsContext } from "../../../services/resturants/resturants.context";
import { Loader } from "../../../components/loader/loader.component";
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
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeArea>
  );
};
