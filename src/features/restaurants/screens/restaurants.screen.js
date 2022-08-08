import React, { useContext } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FlatList } from "react-native";
import { RestaurantsContext } from "../../../services/resturants/resturants.context";
import { Loader } from "../../../components/loader/loader.component";
import { SafeArea, RestaurantListContainer } from "./restaurants.styles";
import Search from "../components/search.compnent";

const renderItem = ({ item }) => (
  <RestaurantListContainer>
    <RestaurantInfoCard restaurant={item} />
  </RestaurantListContainer>
);

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </SafeArea>
  );
};
