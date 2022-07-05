import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function ResturantsInfoCard({ resturant = {} }) {
  const {
    name = "Some Resturant",
    icon = "",
    photos = ["https://picsum.photos/800"],
    adrees = "132 street , location fice",
    openingHours,
    rating,
    isClosedTemporarly,
  } = resturant;

  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{adrees}</Paragraph>
      </Card.Content>
    </Card>
  );
}
