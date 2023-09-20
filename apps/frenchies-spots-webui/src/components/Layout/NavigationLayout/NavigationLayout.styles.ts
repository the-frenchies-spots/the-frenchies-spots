import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  mainContainer: { boxSizing: "border-box" },
  children: {
    flex: 1,
    boxSizing: "border-box",
    overflow: "auto",
  },
  navbar: {
    flex: "0 0 100",
    boxSizing: "border-box",
  },
}));
