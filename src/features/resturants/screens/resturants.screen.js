import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import ResturantsInfoCard from "../components/resturants-infoCard.components";
import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
export default function ResturantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            inputStyle={styles.input}
          />
        </View>
        <View style={styles.listContainer}>
          <ResturantsInfoCard />
        </View>
      </SafeAreaView>
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
  input: {
    padding: 10,
    color: "blue",
  },
});
