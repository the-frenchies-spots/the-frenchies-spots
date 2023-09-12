import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, isCardMode: boolean) => ({
  container: {
    borderRadius: isCardMode ? 16 : 100,
    backgroundColor: "#E3E3FA",
    boxShadow: `0px 4px 8px  #DBDBDB`,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
    backgroundColor: "black",
    opacity: 0.3,
    borderEndStartRadius: 12,
  },
}));
