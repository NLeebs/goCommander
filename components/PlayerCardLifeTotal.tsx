import { usePaperTheme } from "@/utils";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

interface PlayerCardLifeTotalProps {
  lifeTotal: number;
}

const PlayerCardLifeTotal: React.FC<PlayerCardLifeTotalProps> = ({
  lifeTotal,
}) => {
  const paperTheme = usePaperTheme();
  const [startingLifeTotal, setStartingLifeTotal] = useState(lifeTotal);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartingLifeTotal(lifeTotal);
    }, 2500);

    return () => clearTimeout(timer);
  }, [lifeTotal]);

  return (
    <View className="flex-1flex-row justify-between items-center">
      <View className="relative">
        {lifeTotal - startingLifeTotal < 0 && (
          <Text
            variant="headlineSmall"
            className="absolute -left-14 top-1/4 text-center"
            style={{
              color: paperTheme.colors.onSurface,
            }}
          >
            {lifeTotal - startingLifeTotal}
          </Text>
        )}
        <Text
          variant="displayLarge"
          style={{ color: paperTheme.colors.onSurface }}
        >
          {lifeTotal}
        </Text>
        {lifeTotal - startingLifeTotal > 0 && (
          <Text
            variant="headlineSmall"
            className="absolute -right-16 top-1/4 text-center"
            style={{
              color: paperTheme.colors.onSurface,
            }}
          >
            +{lifeTotal - startingLifeTotal}
          </Text>
        )}
      </View>
    </View>
  );
};

export default PlayerCardLifeTotal;
