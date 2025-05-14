import "@/global.css";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { defaultConfig } from "@tamagui/config/v4";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ErrorBoundary } from "react-error-boundary";
import { Text } from "react-native";
import "react-native-reanimated";
import { createTamagui, TamaguiProvider, View } from "tamagui";

const config = createTamagui(defaultConfig);

const ErrorFallback = ({ error }: { error: Error }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Something went wrong:</Text>
    <Text>{error.message}</Text>
  </View>
);

const LoadingScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Loading...</Text>
  </View>
);

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider value={DefaultTheme}>
        <TamaguiProvider config={config}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </TamaguiProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
