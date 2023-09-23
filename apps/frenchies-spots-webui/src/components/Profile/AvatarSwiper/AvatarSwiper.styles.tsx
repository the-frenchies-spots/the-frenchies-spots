import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  mainContainer: {
    position: "relative",
  },
  arrowContainer: { position: "absolute", zIndex: 1000 },
  actionIcon: {
    borderRadius: 50,
    backgroundColor: theme.colors.purple[0],
    height: 40,
    width: 40,
    "&:hover": {
      backgroundColor: theme.colors.purple[0],
    },
    "&:focus": { backgroundColor: theme.colors.purple[0] },
  },
}));
