import { Animated } from "react-native";

export const animateOverlay = (opacity: Animated.Value, toValue: number) => {
  Animated.timing(opacity, {
    toValue,
    duration: 150,
    useNativeDriver: true,
  }).start();
};
