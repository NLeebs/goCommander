import React from "react";
import { View } from "react-native";
import PlayerCard from "./PlayerCard";

const FourPlayerSideBySideGrid = () => {
  return (
    <View className="flex-1 w-full p-4">
      <View className="flex-1 flex-row justify-between gap-2 p-2">
        <PlayerCard orientation="left" />
        <PlayerCard orientation="up" />
      </View>
      <View className="flex-1 flex-row justify-between gap-2 p-2">
        <PlayerCard orientation="up" />
        <PlayerCard orientation="up" />
      </View>
    </View>
  );
};

export default FourPlayerSideBySideGrid;
