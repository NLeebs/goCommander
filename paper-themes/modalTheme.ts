import { MD3Theme } from "react-native-paper";

export const getModalTheme = (theme: MD3Theme) => ({
  modalContainer: {
    backgroundColor: theme.colors.surface,
    padding: 20,
    borderRadius: 8,
  },
});
