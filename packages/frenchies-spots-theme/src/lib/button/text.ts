import { TFScolors } from "../colors/TFScolors";
import { typography } from "../typography";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

interface TextProps {
  textColor: string;
  label: SxProps;
}

export const text: Record<string, TextProps> = {
  default: {
    textColor: TFScolors.purple,
    label: {
      ...typography.button.primary,
    },
  },
  action: {
    textColor: TFScolors.yellow,
    label: {
      ...typography.button.primary,
    },
  },
};
