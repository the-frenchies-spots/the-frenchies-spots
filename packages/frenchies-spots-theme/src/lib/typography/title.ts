import { TFScolors } from "../colors/TFScolors";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

export const title: Record<string, SxProps> = {
  h2: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    color: TFScolors.bluePurple,
  },
  h3: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    color: TFScolors.darkPurple,
  },
  h4: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: TFScolors.darkGrey,
  },
  h5: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    color: TFScolors.darkGrey,
  },
};
