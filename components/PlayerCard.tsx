import {
  PlayerCardLifeTotal,
  PlayerCardLifeTotalButtons,
  PlayerCardName,
} from "@/components";
import { Orientation, Player } from "@/types";
import { usePaperTheme } from "@/utils";
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
      <PlayerCardLifeTotalButtons
        playerId={player.id}
        lifeTotal={player.lifeTotal}
      />

      <View className="flex-row justify-center items-center p-4">
        <PlayerCardName player={player} />
      </View>
      <PlayerCardLifeTotal lifeTotal={player.lifeTotal} />
      <View className="flex-row justify-center items-center p-4">
        <Text variant="bodyLarge">Counters</Text>
      </View>
    </View>
  );
};

export default PlayerCard;
