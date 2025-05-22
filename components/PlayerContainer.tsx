import { PlayerCard } from "@/components";
import { useStore } from "@/stores";
import { View } from "react-native";
// import FourPlayerSideBySideGrid from "./FourPlayerSideBySideGrid";

export default function PlayerContainer() {
  const { players } = useStore();

  const playerCardElements = players.map((player) => (
    <PlayerCard key={`player-card-${player.id}`} player={player} />
  ));

  return (
    <View className="flex-1 justify-center items-center w-full p-4">
      <View className="w-full h-1/2">{playerCardElements}</View>
      {/* <FourPlayerSideBySideGrid /> */}
    </View>
  );
}
