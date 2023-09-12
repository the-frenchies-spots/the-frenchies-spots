import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, selected: boolean) => ({
  container: {
    backgroundColor: selected
      ? theme.colors.lightBluePurple[0]
      : theme.colors.grey[0],
    borderRadius: 8,
    paddingHorizontal: 30,
    paddingVertical: 30,
    border: `1px solid ${
      selected ? theme.colors.darkPurple[0] : theme.colors.grey[0]
    }`,
    cursor: "pointer",
  },
  label: {
    textAlign: "center",
  },
}));
