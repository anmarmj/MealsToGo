import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationsContext } from "../../../services/locations/locations.context";
import { SearchContainer } from "../screens/restaurants.styles";

const Search = () => {
  const { keyword, search } = useContext(LocationsContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
          search(text);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
