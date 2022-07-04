import { StatusBar as ExpStatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import Search from "./src/components/Search";
import ListItems from "./src/features/ListItems";
import React, { useState } from "react";
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Search onChangeSearch={onChangeSearch} searchQuery={searchQuery} />
        </View>
        <View style={styles.listContainer}>
          <ListItems />
        </View>
      </SafeAreaView>
      <ExpStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,

    backgroundColor: "#fff",
  },
  searchContainer: {
    flex: 0.1,
    justifyContent: "space-around",
    paddingLeft: 5,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
