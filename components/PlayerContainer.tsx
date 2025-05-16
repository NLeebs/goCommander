import { View } from "react-native";
import PlayerCard from "./PlayerCard";

export default function PlayerContainer() {
  return (
    <View testID="player-container" className="flex-1 p-4">
      <View className="flex-row flex-wrap justify-between">
        <View className="w-[48%] mb-4">
          <PlayerCard testID="player-card" />
        </View>
        <View className="w-[48%] mb-4">
          <PlayerCard testID="player-card" />
        </View>
        <View className="w-[48%] mb-4">
          <PlayerCard testID="player-card" />
        </View>
        <View className="w-[48%] mb-4">
          <PlayerCard testID="player-card" />
        </View>
      </View>
    </View>
  );
}
