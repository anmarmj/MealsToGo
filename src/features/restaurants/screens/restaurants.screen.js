import React, { useContext } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FlatList, Pressable, TouchableOpacity } from "react-native";
import { RestaurantsContext } from "../../../services/resturants/resturants.context";
import { Loader } from "../../../components/loader/loader.component";
import { SafeArea, RestaurantListContainer } from "./restaurants.styles";
import Search from "../components/search.component";
import ErrorComp from "../../../components/error/error.component";

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const renderItem = ({ item }) => (
    <RestaurantListContainer>
      {/* <Pressable onPress={() => navigation.navigate("RestaurantDetail")}> */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantDetail", { restaurant: item })
        }
      >
        <RestaurantInfoCard restaurant={item} />
      </TouchableOpacity>
    </RestaurantListContainer>
  );
  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <Loader />
      ) : error !== null ? (
        <ErrorComp>{error}</ErrorComp>
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
