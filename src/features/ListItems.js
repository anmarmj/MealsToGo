import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ListItems() {
  return <Text styles={styles.container}>list items</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
