import { ErrorScreen, LoadingScreen } from "@/components";
import "@/global.css";
import {
  darkColorTheme,
  fontTheme,
  getModalTheme,
  lightColorTheme,
} from "@/paper-themes";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ErrorBoundary } from "react-error-boundary";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return <LoadingScreen />;
  }

  const baseTheme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;
  const colorTheme = colorScheme === "dark" ? darkColorTheme : lightColorTheme;

  const paperTheme = {
    ...baseTheme,
    colors: colorTheme.colors,
    fonts: fontTheme,
    modal: getModalTheme(baseTheme),
  };

  const navigationTheme = {
    dark: colorScheme === "dark",
    colors: {
      primary: paperTheme.colors.primary,
      background: paperTheme.colors.background,
      card: paperTheme.colors.surface,
      text: paperTheme.colors.onSurface,
      border: paperTheme.colors.outline,
      notification: paperTheme.colors.error,
    },
    fonts: {
      regular: { fontFamily: "System", fontWeight: "400" as const },
      medium: { fontFamily: "System", fontWeight: "500" as const },
      bold: { fontFamily: "System", fontWeight: "700" as const },
      heavy: { fontFamily: "System", fontWeight: "900" as const },
    },
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorScreen}>
      <ThemeProvider value={navigationTheme}>
        <PaperProvider theme={paperTheme}>
          <Stack></Stack>
        </PaperProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
