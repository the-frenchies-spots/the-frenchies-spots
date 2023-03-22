import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

export const button: Record<string, SxProps> = {
  primary: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
  },
};
