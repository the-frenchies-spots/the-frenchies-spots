import { StyleSheet } from "react-native";
import { StyleParamType } from "./style-param-type";

export const styles = (params: StyleParamType) => {
  const { align, justify, direction, center } = params;

  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: direction,
      alignItems: center ? "center" : align,
      justifyContent: center ? "center" : justify,
    },
  });
};
