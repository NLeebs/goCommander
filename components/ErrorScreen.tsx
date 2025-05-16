import { Text, View } from "react-native";

const ErrorScreen = ({ error }: { error: Error }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Something went wrong:</Text>
    <Text>{error.message}</Text>
  </View>
);

export default ErrorScreen;
