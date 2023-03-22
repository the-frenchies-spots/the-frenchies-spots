import { TFScolors } from "../colors/TFScolors";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

export const body: SxProps = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 16,
  color: TFScolors.darkPurple,
};
