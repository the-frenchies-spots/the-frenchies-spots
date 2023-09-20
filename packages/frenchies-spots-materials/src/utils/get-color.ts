import { TColor } from "../type";
import { defaultColor } from "./colors";

export const getColor = (color?: TColor | undefined) =>
  color ? defaultColor[color] : undefined;
