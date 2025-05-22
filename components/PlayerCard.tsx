import {
  PlayerCardHorizontalContent,
  PlayerCardVerticalContent,
} from "@/components";
import { Orientation } from "@/types";
import { usePaperTheme } from "@/utils/theme";
import * as React from "react";
import { View } from "react-native";

interface PlayerCardProps {
  testID?: string;
  orientation?: Orientation;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  testID,
  orientation = "up",
}) => {
  const paperTheme = usePaperTheme();

  return (
    <View
      className="flex-1 rounded-lg"
      testID={testID}
      style={{ backgroundColor: paperTheme.colors.surfaceVariant }}
    >
      {(orientation === "up" || orientation === "down") && (
        <PlayerCardVerticalContent />
      )}
      {(orientation === "left" || orientation === "right") && (
        <PlayerCardHorizontalContent orientation={orientation} />
      )}
    </View>
  );
};

export default PlayerCard;
