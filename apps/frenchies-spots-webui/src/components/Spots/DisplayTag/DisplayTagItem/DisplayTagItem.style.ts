import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  touchableContainer: {},
  container: {
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    width: 77,
    height: 77,
    border: "1px solid",
    borderColor: "#ECECEC",
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
