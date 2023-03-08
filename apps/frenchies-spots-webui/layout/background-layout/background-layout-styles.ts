import { StyleSheet } from "react-native";
import { StyleParamType } from "./style-param-type";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType, params: StyleParamType) => {
  const { isAppBar, isBackground, isPhone } = params;
  const radius = isAppBar ? 55 : 0;

  const TopRadius = {
    borderTopStartRadius: radius,
    borderTopEndRadius: radius,
  };

  const BottomRadius = {
    borderBottomStartRadius: radius,
    borderBottomEndRadius: radius,
  };

  const AppBarRadius = isPhone ? BottomRadius : TopRadius;

  return StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      position: "relative",
      flex: 1,
      backgroundColor: theme.colors.primary.main,
    },
    background: {
      flex: 1,
      width: "100%",
      height: "100%",
      position: "relative",
      ...AppBarRadius,
    },
    image: {
      width: "100%",
      height: "100%",
      position: "absolute",
      ...AppBarRadius,
    },
    opacity: {
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: theme.colors.white,
      ...AppBarRadius,
      opacity: 0.7,
    },
    body: {
      position: "absolute",
      flex: 1,
      justifyContent: "center",
      height: "100%",
      width: "100%",
      ...AppBarRadius,
      overflow: "hidden",
    },

    scrollContainer: {
      height: "100%",
      ...AppBarRadius,
    },
    blankBackground: {
      backgroundColor: theme.colors.white,
      width: "100%",
      height: "100%",
      ...AppBarRadius,
    },
  });
};
