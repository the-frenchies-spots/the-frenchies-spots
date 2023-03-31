import { TFScolors } from "../colors/TFScolors";
import { typography } from "../typography";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

interface PrimaryProps {
  backgroundColor: string;
  label: SxProps;
  global: SxProps & { boxShadow?: string; border?: number };
}

export const primary: Record<string, PrimaryProps> = {
  contained: {
    backgroundColor: TFScolors.yellow,
    label: {
      ...typography.button.primary,
    },
    global: { borderRadius: 8 },
  },
  outlined: {
    backgroundColor: TFScolors.white,
    label: {
      ...typography.button.primary,
    },
    global: {
      borderRadius: 8,
      borderColor: TFScolors.yellow,
      borderWidth: 1,
      // boxShadow: "0px 4px 6px #E3E3FA",
    },
  },
};
