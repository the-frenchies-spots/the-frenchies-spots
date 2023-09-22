import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  button: {
    border: `1px solid ${theme.colors.red[0]}`,
    borderRadius: 50,
    height: 40,
    width: 40,
    "&:hover": {
      backgroundColor: theme.colors.red[1],
    },
  },
  icon: {
    color: theme.colors.red[1],
    "&:hover": {
      color: "white",
    },
  },
}));
