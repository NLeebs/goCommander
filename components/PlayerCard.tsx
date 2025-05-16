import * as React from "react";
import { Card, Text } from "react-native-paper";

interface PlayerCardProps {
  testID?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ testID }) => {
  return (
    <Card testID={testID}>
      <Card.Title title="Hello Player" />
      <Card.Content>
        <Text variant="bodyMedium">This is where you do battle</Text>
      </Card.Content>
    </Card>
  );
};

export default PlayerCard;
