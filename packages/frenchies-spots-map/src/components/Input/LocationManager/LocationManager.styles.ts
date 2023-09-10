import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  container: {
    border: "1px solid",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  locationPicker: {
    flexGrow: 1,
    height: "100%",
    marginTop: 16,
    marginBottom: 16,
  },
}));
