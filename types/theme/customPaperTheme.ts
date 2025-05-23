import { MD3Theme } from "react-native-paper";

export interface CustomPaperTheme extends MD3Theme {
  modal: {
    modalContainer: {
      backgroundColor: string;
      padding: number;
      borderRadius: number;
    };
  };
}
