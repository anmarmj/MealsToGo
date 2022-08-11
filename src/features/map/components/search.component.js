import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationsContext } from "../../../services/locations/locations.context";
import { LanguageContext } from "../../../infrastructure/language/language.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationsContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder={language.search.placeHolder}
        icon="map"
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
