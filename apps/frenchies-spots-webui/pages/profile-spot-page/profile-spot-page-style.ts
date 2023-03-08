import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (
  theme: ThemeType,
  data: { isPhone: boolean; isTablette: boolean }
) => {
  const { isPhone, isTablette } = data;

  let width: number | string = 900;
  if (isPhone) width = "100%";
  if (isTablette) width = 600;
  return StyleSheet.create({
    container: {
      width,
    },
    title: {
      marginBottom: 10,
      color: theme.colors.primary.text,
    },
    subTitle: {
      marginBottom: 20,
      color: theme?.colors.primary.dark,
    },
    searchInput: {
      marginBottom: 10,
    },
    filterButton: {
      marginBottom: 20,
    },
    sectionTitle: {
      marginTop: 20,
      marginBottom: 20,
      color: theme.colors.primary.text,
    },
    filterContainer: {
      width: "100%",
      height: "100%",
    },
    filterContent: { width },
  });
};
