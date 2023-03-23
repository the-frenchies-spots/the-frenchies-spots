import { TFScolors } from "../colors/TFScolors";
import { typography } from "../typography";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

const { white, darkGrey, purple, lightBluePurple, darkPurple, greyDisable } =
  TFScolors;

interface SecondaryProps {
  backgroundColor: string;
  textColor: string;
  label: SxProps;
  global: SxProps & { boxShadow?: string; border?: number };
}

export const secondary: Record<string, SecondaryProps> = {
  default: {
    textColor: white,
    backgroundColor: purple,
    label: {
      ...typography.button.secondary,
    },
    global: {
      borderRadius: 8,
      boxShadow: "0px 3px 4px rgba(164, 128, 166, 0.25)",
    },
  },
  selected: {
    textColor: darkPurple,
    backgroundColor: lightBluePurple,
    label: {
      ...typography.button.secondary,
    },
    global: {
      borderRadius: 8,
      borderColor: darkPurple,
      borderWidth: 1,
      boxShadow: "0px 3px 4px rgba(164, 128, 166, 0.25)",
    },
  },
  disabled: {
    textColor: darkGrey,
    backgroundColor: greyDisable,
    label: {
      ...typography.button.secondary,
    },
    global: {
      borderRadius: 8,
      boxShadow: "0px 3px 4px rgba(164, 128, 166, 0.25)",
    },
  },
};
