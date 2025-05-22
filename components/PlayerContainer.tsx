import { View } from "react-native";
import FourPlayerSideBySideGrid from "./FourPlayerSideBySideGrid";

export default function PlayerContainer() {
  return (
    <View className="flex-1 w-full p-4">
      <FourPlayerSideBySideGrid />
    </View>
  );
}
