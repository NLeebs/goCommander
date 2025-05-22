import { Orientation } from "@/types";
import { getRotationInDegrees, usePaperTheme } from "@/utils";
import React, { useState } from "react";
import { LayoutChangeEvent, Text, View } from "react-native";

interface PlayerCardHorizontalContentProps {
  orientation: Orientation;
}

const PlayerCardHorizontalContent: React.FC<
  PlayerCardHorizontalContentProps
> = ({ orientation }) => {
  const paperTheme = usePaperTheme();
  const [playerNameSize, setPlayerNameSize] = useState({ width: 0, height: 0 });

  const handlePlayerNameLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setPlayerNameSize({ width: height, height: width });
  };
  console.log(playerNameSize);

  return (
    <View className="flex-1 flex-row justify-between gap-0 p-4">
      <View
        className="flex-col justify-center items-center w-1/3 overflow-visible"
        onLayout={handlePlayerNameLayout}
        style={{
          width: playerNameSize.width,
          height: playerNameSize.height,
          transform: [{ rotate: `${getRotationInDegrees(orientation)}deg` }],
        }}
      >
        <Text>Player with long name</Text>
      </View>
      <View className="flex-col justify-between items-center p-4">
        <Text className="px-4">+</Text>
        <Text
          style={{
            transform: [{ rotate: `${getRotationInDegrees(orientation)}deg` }],
          }}
        >
          40
        </Text>
        <Text style={{ color: paperTheme.colors.primary }} className="px-4">
          -
        </Text>
      </View>
      <View className="flex-col justify-center items-center p-4">
        <Text
          style={{
            transform: [{ rotate: `${getRotationInDegrees(orientation)}deg` }],
          }}
        >
          Counters
        </Text>
      </View>
    </View>
  );
};

export default PlayerCardHorizontalContent;
