import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

const radius = 20;
const radiusPrice = 10;

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    image: {
      width: 120,
      height: 120,
    },
    container: {
      backgroundColor: theme.navBarButton.select,
      borderBottomEndRadius: radius,
      borderTopEndRadius: radius,
      borderBottomStartRadius: radius,
      borderTopStartRadius: radius,
      overflow: "hidden",
    },
    imageContainer: {
      width: 120,
      height: 120,
      backgroundColor: theme.colors.white,
      overflow: "hidden",
      borderBottomEndRadius: 40,
      borderTopEndRadius: 40,
    },
    secondContainer: { width: "100%" },
    gamePointsCard: {
      width: "35%",
      height: 120,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottomEndRadius: 40,
      borderTopEndRadius: 40,
    },
    gamePointsLabel: {
      fontWeight: "bold",
      fontSize: 20,
    },
    priceCard: {
      width: "35%",
      height: 120,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    priceCardLabel: {
      fontSize: 20,
      backgroundColor: theme.colors.secondary.main,
      padding: 5,
      borderBottomEndRadius: radiusPrice,
      borderTopEndRadius: radiusPrice,
      borderBottomStartRadius: radiusPrice,
      borderTopStartRadius: radiusPrice,
      opacity: 0.8,
    },
  });
