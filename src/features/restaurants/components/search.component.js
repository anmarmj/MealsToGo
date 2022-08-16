import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LanguageContext } from "../../../infrastructure/language/language.context";
import { LocationsContext } from "../../../services/locations/locations.context";
import { SearchContainer } from "../screens/restaurants.styles";

const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationsContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder={language.search.placeHolder}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
