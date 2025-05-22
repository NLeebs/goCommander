import { Orientation, Player } from "@/types";
import { usePaperTheme } from "@/utils/theme";
import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

interface PlayerCardProps {
  player: Player;
  testID?: string;
  orientation?: Orientation;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  orientation = "up",
  testID,
}) => {
  const paperTheme = usePaperTheme();

  return (
    <View
      className="flex-1 justify-between rounded-lg"
      testID={testID}
      style={{ backgroundColor: paperTheme.colors.surfaceVariant }}
    >
      <View className="flex-row justify-center items-center p-4">
        <Text
          variant="titleMedium"
          style={{ color: paperTheme.colors.onSurfaceVariant }}
        >
          Player Name
        </Text>
      </View>
      <View className="flex-row justify-between items-center p-4">
        <Text
          variant="headlineMedium"
          style={{ color: paperTheme.colors.primary }}
          className="px-4"
        >
          -
        </Text>
        <Text variant="headlineLarge">{player.lifeTotal}</Text>
        <Text variant="headlineMedium" className="px-4">
          +
        </Text>
      </View>
      <View className="flex-row justify-center items-center p-4">
        <Text variant="bodyLarge">Counters</Text>
      </View>
    </View>
  );
};

export default PlayerCard;
