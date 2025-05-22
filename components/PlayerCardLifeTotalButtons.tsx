import { useStore } from "@/stores";
import { animateOverlay, usePaperTheme } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

interface PlayerCardLifeTotalButtonsProps {
  playerId: number;
  lifeTotal: number;
}

const PlayerCardLifeTotalButtons: React.FC<PlayerCardLifeTotalButtonsProps> = ({
  playerId,
  lifeTotal,
}) => {
  const paperTheme = usePaperTheme();
  const { updatePlayerLifeTotal } = useStore();
  const [decreaseOverlayOpacity] = useState(new Animated.Value(0));
  const [increaseOverlayOpacity] = useState(new Animated.Value(0));
  const decreaseIntervalRef = useRef<number | null>(null);
  const increaseIntervalRef = useRef<number | null>(null);
  const currentLifeTotalRef = useRef(lifeTotal);

  useEffect(() => {
    currentLifeTotalRef.current = lifeTotal;
  }, [lifeTotal]);

  const handleDecreaseLifeTotalPress = () => {
    updatePlayerLifeTotal(playerId, lifeTotal - 1);
  };

  const handleDecreaseLifeTotalLongPress = () => {
    if (decreaseIntervalRef.current !== null) {
      clearInterval(decreaseIntervalRef.current);
    }

    decreaseIntervalRef.current = setInterval(() => {
      updatePlayerLifeTotal(playerId, currentLifeTotalRef.current - 10);
    }, 500);
  };

  const handleDecreaseLifeTotalRelease = () => {
    if (decreaseIntervalRef.current !== null) {
      clearInterval(decreaseIntervalRef.current);
      decreaseIntervalRef.current = null;
    }
  };

  const handleIncreaseLifeTotalPress = () => {
    updatePlayerLifeTotal(playerId, lifeTotal + 1);
  };

  const handleIncreaseLifeTotalLongPress = () => {
    if (increaseIntervalRef.current !== null) {
      clearInterval(increaseIntervalRef.current);
    }

    increaseIntervalRef.current = setInterval(() => {
      updatePlayerLifeTotal(playerId, currentLifeTotalRef.current + 10);
    }, 500);
  };

  const handleIncreaseLifeTotalRelease = () => {
    if (increaseIntervalRef.current !== null) {
      clearInterval(increaseIntervalRef.current);
      increaseIntervalRef.current = null;
    }
  };

  return (
    <View className="absolute inset-0 flex-1 flex-row justify-between items-center">
      <TouchableOpacity
        onPress={handleDecreaseLifeTotalPress}
        onLongPress={handleDecreaseLifeTotalLongPress}
        onPressIn={() => animateOverlay(decreaseOverlayOpacity, 0.3)}
        onPressOut={() => {
          animateOverlay(decreaseOverlayOpacity, 0);
          handleDecreaseLifeTotalRelease();
        }}
        className="relative w-1/2 h-full items-start justify-center bg-surface-variant pl-4"
        activeOpacity={1}
      >
        <Animated.View
          className="absolute inset-0"
          style={{
            opacity: decreaseOverlayOpacity,
            backgroundColor: paperTheme.colors.onSurfaceVariant,
          }}
        />
        <Text className="text-4xl relative z-10">-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleIncreaseLifeTotalPress}
        onLongPress={handleIncreaseLifeTotalLongPress}
        onPressIn={() => animateOverlay(increaseOverlayOpacity, 0.3)}
        onPressOut={() => {
          animateOverlay(increaseOverlayOpacity, 0);
          handleIncreaseLifeTotalRelease();
        }}
        className="relative w-1/2 h-full items-end justify-center bg-surface-variant pr-4"
        activeOpacity={1}
      >
        <Animated.View
          className="absolute inset-0"
          style={{
            opacity: increaseOverlayOpacity,
            backgroundColor: paperTheme.colors.onSurfaceVariant,
          }}
        />
        <Text className="text-4xl relative z-10">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayerCardLifeTotalButtons;
