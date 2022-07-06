import React from "react";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import Title from "../../../utils/mainTheme";

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
