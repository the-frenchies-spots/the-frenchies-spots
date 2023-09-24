import { createStyles } from "@frenchies-spots/material";

const size = 45;

export const useStyles = createStyles((theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    right: 0,
  },
  locationButton: {
    borderRadius: size,
    border: `1px solid ${theme.colors.superLightGrey[3]}`,
    height: size,
    width: size,
    backgroundColor: "white",
    "&:hover": { backgroundColor: theme.colors.superLightGrey[3] },
  },
  zoomButton: {
    backgroundColor: "white",
    border: `1px solid ${theme.colors.superLightGrey[3]}`,
    height: size,
    width: size,
    "&:hover": { backgroundColor: theme.colors.superLightGrey[3] },
  },
}));
