import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, isMapMode: boolean) => ({
  actionIcon: {
    backgroundColor: isMapMode ? "white" : undefined,
    width: 35,
    height: 35,
  },
}));
