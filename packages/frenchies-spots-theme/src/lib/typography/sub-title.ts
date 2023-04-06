import { TFScolors } from "../colors/TFScolors";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

export const subTitle: Record<string, SxProps> = {
  sub1: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    color: TFScolors.darkPurple,
  },
  sub2: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    color: TFScolors.darkGrey,
  },
};
