import { TFScolors } from "../colors/TFScolors";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

export const caption: SxProps = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: 10,
  color: TFScolors.darkGrey,
};
