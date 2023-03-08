import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

const radius = 15;
const radiusCard = {
  borderBottomEndRadius: radius,
  borderBottomStartRadius: radius,
  borderTopStartRadius: radius,
  borderTopEndRadius: radius,
};

export const styles = (theme: ThemeType, isPhone: boolean) =>
  StyleSheet.create({
    mainContainer: {
      width: isPhone ? "100%" : 700,
    },
    title: { fontSize: 24 },
    accountCircle: {
      backgroundColor: theme.colors.primary.main,
      width: 150,
      height: 150,
      borderRadius: 150,
      marginBottom: 30,
    },
    logoutButton: { marginBottom: 50, fontSize: 20 },
    firstContainer: { marginBottom: 12 },
    favoriteBlock: {
      width: "70%",
      backgroundColor: theme.button.colors.secondary.main,
      height: 150,
      ...radiusCard,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    favoriteBlockLabel: {
      color: theme.colors.white,
    },
    configBlock: {
      width: "27%",
      backgroundColor: theme.button.colors.secondary.main,
      height: 150,
      ...radiusCard,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    configIcon: { color: theme.colors.white, fontSize: 35 },
    secondContainer: {},
    spotBlock: {
      ...radiusCard,
      height: 150,
      backgroundColor: theme.button.colors.secondary.main,
      width: "49%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    spotBlockLabel: { color: theme.colors.white },
    createBlock: {
      width: "48%",
      height: 150,
    },
    createSpotBlock: {
      ...radiusCard,
      backgroundColor: theme.colors.secondary.main,
      height: "46%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    createSpotBlockLabel: { color: theme.colors.white },
    createOther: {
      ...radiusCard,
      backgroundColor: theme.colors.secondary.main,
      height: "46%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    createOtherLabel: { color: theme.colors.white },
  });
