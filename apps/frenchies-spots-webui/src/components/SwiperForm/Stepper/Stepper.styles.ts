import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  paginationBar: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    paddingHorizontal: 10,
    backgroundColor: theme.colors.darkPurple[0],
  },
  toolBar: {
    backgroundColor: theme.colors.darkPurple[0],
  },
  actionIcon: {
    "&:hover": {
      backgroundColor: theme.colors.darkPurple[2],
    },
  },
  mainContainer: { backgroundColor: theme.colors.darkPurple[0] },
}));
