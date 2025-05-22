import { MD3Theme, useTheme } from "react-native-paper";

export const usePaperTheme = () => {
  const theme = useTheme();
  return theme;
};

export const getThemeColor = (
  theme: MD3Theme,
  colorKey: keyof MD3Theme["colors"]
) => {
  return theme.colors[colorKey];
};
