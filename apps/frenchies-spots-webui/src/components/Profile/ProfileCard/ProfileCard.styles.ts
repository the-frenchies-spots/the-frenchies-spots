import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  container: {
    cursor: "pointer",
  },
  section: { position: "relative" },
  spotButton: {
    position: "absolute",
    transform: "translate(0%, -50%)",
    right: 30,
  },
}));
