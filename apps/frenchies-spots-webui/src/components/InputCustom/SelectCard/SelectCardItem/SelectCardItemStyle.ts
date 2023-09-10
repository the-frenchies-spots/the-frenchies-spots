import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, selected: boolean) => ({
  container: {
    backgroundColor: selected
      ? theme.colors.lightBluePurple[0]
      : theme.colors.grey[0],
    borderRadius: 8,
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: selected ? theme.colors.darkPurple[0] : theme.colors.grey[0],
    cursor: "pointer",
  },
  label: {
    textAlign: "center",
  },
}));
