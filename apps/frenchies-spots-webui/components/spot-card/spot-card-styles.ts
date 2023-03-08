import { StyleSheet } from "react-native";
import { SpotCardMode } from "./spot-card-type";

const borderRadius = 20;

export const styles = (
  mode: SpotCardMode,
  isPhone: boolean,
  isTablette: boolean
) => {
  const minWidth = 280;

  const widthPhone = mode === "medium" ? minWidth : "100%";

  const widthDesktop = minWidth;

  return StyleSheet.create({
    container: {
      position: "relative",
      height: 300,
      width: isPhone ? widthPhone : widthDesktop,
      // width: "100%",
      borderRadius,
      display: "flex",
      justifyContent: "flex-end",
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius,
    },
  });
};
