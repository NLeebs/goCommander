import { useTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { IconButton } from "react-native-paper";

interface ThemeToggleProps {
  onToggle: () => void;
}

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  const colorScheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <IconButton
      icon={
        colorScheme === "dark" ? "white-balance-sunny" : "moon-waning-crescent"
      }
      iconColor={colors.text}
      size={24}
      onPress={onToggle}
      testID="theme-toggle"
    />
  );
}
