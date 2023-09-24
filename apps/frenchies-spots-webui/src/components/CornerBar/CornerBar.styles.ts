import { createStyles } from "@frenchies-spots/material";

export type StyleParams = {
  color?: string | undefined;
  mode?: "top" | "bottom";
  zIndex?: number;
};

export const useStyles = createStyles(
  (
    theme,
    params: StyleParams = { color: "#3F3979", mode: "bottom", zIndex: 100000 }
  ) => ({
    container: {
      position: "relative",
      width: "100%",
    },
    cornersBar: {
      position: "absolute",
      width: "100%",
      top: params.mode === "bottom" ? -50 : undefined,
    },
    children: {
      backgroundColor: params.color,
    },
  })
);
