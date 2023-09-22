import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  icon: {
    border: `1px solid ${theme.colors.yellow[0]}`,
    backgroundColor: theme.colors.yellow[0],
    borderRadius: 50,
    height: 40,
    width: 40,
    "&:hover": {
      backgroundColor: theme.colors.yellow[1],
    },
  },
}));
