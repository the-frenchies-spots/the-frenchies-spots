import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  container: {},
  spotMenu: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
  },
  buttonMode: {
    position: "absolute",
    left: "50%",
    bottom: 100,
    transform: "translate(-50%, -50%)",
  },
}));
