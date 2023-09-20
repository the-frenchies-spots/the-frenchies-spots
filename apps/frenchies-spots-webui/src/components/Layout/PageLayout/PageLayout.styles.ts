import { createStyles } from "@frenchies-spots/material";

export type StyleParams = { opacity?: number };

export const useStyles = createStyles(
  (theme, params: StyleParams = { opacity: 0.7 }) => ({
    container: {
      position: "relative",
      height: "100vh",
      width: "100%",
    },
    opacity: {
      position: "absolute",
      opacity: params.opacity,
      backgroundColor: "white",
      height: "100%",
      width: "100%",
    },
    children: {
      position: "absolute",
      height: "100%",
      width: "100%",
      boxSizing: "border-box",
      overflow: "auto",
    },
  })
);
