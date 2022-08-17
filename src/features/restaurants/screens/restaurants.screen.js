import React, { useContext, useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Pressable, TouchableOpacity } from "react-native";
import { RestaurantsContext } from "../../../services/resturants/resturants.context";
import { Loader } from "../../../components/loader/loader.component";
import { RestaurantListContainer } from "./restaurants.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import Search from "../components/search.component";
import ErrorComp from "../../../components/error/error.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animation";

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const renderItem = ({ item }) => (
    <RestaurantListContainer>
      {/* <Pressable onPress={() => navigation.navigate("RestaurantDetail")}> */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantDetail", { restaurant: item })
        }
      >
        <FadeInView duration={1000}>
          <RestaurantInfoCard restaurant={item} />
        </FadeInView>
      </TouchableOpacity>
    </RestaurantListContainer>
  );
  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : error !== null ? (
        <ErrorComp>{error}</ErrorComp>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </SafeArea>
  );
};
