import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    borderRadius: 20,
  },
  coordinates: { textAlign: "center" },
  coordinateContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#3F3979",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
}));
