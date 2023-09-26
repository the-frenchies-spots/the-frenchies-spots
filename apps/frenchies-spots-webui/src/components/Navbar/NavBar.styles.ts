import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.darkPurple[0],
  },
  selected: {
    borderRadius: 8,
    backgroundColor: "#7874A1",
    width: 50,
    height: 50,
    "&:hover": {
      borderRadius: 8,
      backgroundColor: "#7874A1",
      width: 50,
      height: 50,
    },
  },
  default: {
    borderRadius: 8,
    width: 50,
    height: 50,
    "&:hover": {
      borderRadius: 8,
      backgroundColor: "#7874A1",
      width: 50,
      height: 50,
    },
  },
}));
