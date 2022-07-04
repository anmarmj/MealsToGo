import React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

export default function Search({ onChangeSearch, searchQuery }) {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      styles={styles.container}
      inputStyle={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 10,
    color: "blue",
  },
});
