import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LanguageContext } from "../../../infrastructure/language/language.context";
import { LocationsContext } from "../../../services/locations/locations.context";
import { SearchContainer } from "../screens/restaurants.styles";

const Search = () => {
  const { keyword, search } = useContext(LocationsContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const { language } = useContext(LanguageContext);

  return (
    <SearchContainer>
      <Searchbar
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
