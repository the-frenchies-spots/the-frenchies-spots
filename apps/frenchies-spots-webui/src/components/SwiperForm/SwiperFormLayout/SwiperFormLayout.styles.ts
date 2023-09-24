import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, height: number) => ({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  children: { flex: 1, boxSizing: "border-box", overflow: "auto" },
  navigation: {
    flex: `0 0 ${height}`,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
