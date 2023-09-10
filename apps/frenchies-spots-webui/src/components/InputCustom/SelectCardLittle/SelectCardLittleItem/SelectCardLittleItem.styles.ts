import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, selected: boolean) => ({
  container: {
    width: 100,
    height: 100,
    backgroundColor: selected
      ? theme.colors.lightBluePurple[0]
      : theme.colors.grey[0],
    borderRadius: 8,
    borderWidth: 1,
    border: `1px solid ${
      selected ? theme.colors.darkPurple[0] : theme.colors.grey[0]
    }`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  label: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
