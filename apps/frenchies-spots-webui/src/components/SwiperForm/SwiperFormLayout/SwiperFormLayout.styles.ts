import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, height: number) => ({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  children: { flexGrow: 1 },
  navigation: {
    height: height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
