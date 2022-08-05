import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FlatList } from "react-native";
import { RestaurantsContext } from "../../../services/resturants/resturants.context";
import { LocationsContext } from "../../../services/locations/locations.context";
import { Loader } from "../../../components/loader/loader.component";
import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer
} from "./restaurants.styles";

const renderItem = ({ item }) => (
  <RestaurantListContainer>
    <RestaurantInfoCard restaurant={item} />
  </RestaurantListContainer>
);

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants, setLocation } =
    useContext(RestaurantsContext);
  const { location, search } = useContext(LocationsContext);

  location && setLocation(`locations ${location.lat},${location.lng}`);

  // setLocation(`locations ${location.lat},${location.lng}`);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar onChangeText={search} />
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
