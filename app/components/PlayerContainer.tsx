import { PlayerCard } from "@/app/components";
import { View } from "react-native";

export default function PlayerContainer() {
  return (
    <View className="flex-1 p-4">
      <View className="flex-row flex-wrap justify-between">
        <View className="w-[48%] mb-4">
          <PlayerCard />
        </View>
        <View className="w-[48%] mb-4">
          <PlayerCard />
        </View>
        <View className="w-[48%] mb-4">
          <PlayerCard />
        </View>
        <View className="w-[48%] mb-4">
          <PlayerCard />
        </View>
      </View>
    </View>
  );
}
