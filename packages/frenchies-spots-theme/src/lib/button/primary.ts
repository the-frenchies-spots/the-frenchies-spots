import { TFScolors } from "../colors/TFScolors";
import { typography } from "../typography";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

interface FloatingProps {
  backgroundColor: string;
  label: SxProps;
  global: SxProps & { boxShadow?: string; border?: number };
}

export const primary: Record<string, FloatingProps> = {
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
      border: 1,
      borderColor: TFScolors.yellow,
    },
  },
};
