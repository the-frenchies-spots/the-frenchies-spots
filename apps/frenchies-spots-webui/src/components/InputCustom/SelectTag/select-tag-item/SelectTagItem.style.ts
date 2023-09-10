import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, selected: boolean) => ({
  touchableContainer: {},
  container: {
    backgroundColor: selected ? "#E3E3FA" : "#ECECEC",
    borderRadius: 50,
    width: 77,
    height: 77,
    border: "1px solid",
    borderColor: selected ? "#3F3979" : "#ECECEC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  picture: {},
  label: {},
  tagLabel: {
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontSize: 10,
  },
}));
