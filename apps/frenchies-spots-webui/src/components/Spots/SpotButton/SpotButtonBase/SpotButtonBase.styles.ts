import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  container: {
    width: 42,
    height: 42,
    borderRadius: 50,
    border: "2px solid orange",
    boxShadow: "0px 3px 4px #BBBBBB",
    backgroundColor: theme.white,
    transition: "0.3s ease",
    "&:hover": {
      boxShadow: "0px 5px 6px #BBBBBB",
      padding: 8,
    },
  },
}));
