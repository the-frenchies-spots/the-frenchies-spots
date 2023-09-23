import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, isSelected: boolean) => ({
  touchable: {
    flex: 1,
    borderRight: `8px solid ${theme.colors.darkPurple[0]}`,
    borderLeft: `8px solid ${theme.colors.darkPurple[0]}`,
    cursor: "pointer",
  },
  paginationButton: {
    backgroundColor: isSelected
      ? theme.colors.yellow[0]
      : theme.colors.lightBluePurple[0],
    height: 5,
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginVertical: 30,
  },
}));
