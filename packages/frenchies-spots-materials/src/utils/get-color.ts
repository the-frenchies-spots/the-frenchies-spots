import { TColor } from "../type";
import { defaultColor } from "./colors";

export const getColor = (color?: string | undefined) => {
  if (Object.keys(defaultColor).includes(`${color}`)) {
    return defaultColor[color as TColor];
  }
  return color;
};
