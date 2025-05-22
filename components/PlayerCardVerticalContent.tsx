import { usePaperTheme } from "@/utils/theme";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

const PlayerCardVerticalContent = () => {
  const paperTheme = usePaperTheme();

  return (
    <View className="flex-1 flex-col justify-between">
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
        <Text variant="headlineLarge">40</Text>
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

export default PlayerCardVerticalContent;
