import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  default: {
    border: `1px solid ${theme.colors.yellow[0]}`,
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  friendRequest: {
    border: `1px solid green`,
    backgroundColor: "green",
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  isFriend: {
    border: `1px solid ${theme.colors.purple[0]}`,
    borderRadius: 50,
    height: 40,
    width: 40,
    "&:hover": {
      backgroundColor: theme.colors.purple[5],
    },
  },
}));
