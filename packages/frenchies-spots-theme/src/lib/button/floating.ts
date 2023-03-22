import { TFScolors } from "../colors/TFScolors";
import { typography } from "../typography";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

interface FloatingProps {
  backgroundColor: string;
  label: SxProps;
  global: SxProps & { boxShadow: string };
}

export const floating: FloatingProps = {
  backgroundColor: TFScolors["yellow"],
  label: {
    ...typography.button.primary,
  },
  global: {
    boxShadow: `0px 2px 8px 1px ${TFScolors.greyDisable}`,
    borderRadius: 50,
  },
};
