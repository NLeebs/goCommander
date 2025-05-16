import * as React from "react";
import { Card, Text } from "react-native-paper";

export default function PlayerCard() {
  return (
    <Card>
      <Card.Title title="Hello Player" />
      <Card.Content>
        <Text variant="bodyMedium">This is where you do battle</Text>
      </Card.Content>
    </Card>
  );
}
