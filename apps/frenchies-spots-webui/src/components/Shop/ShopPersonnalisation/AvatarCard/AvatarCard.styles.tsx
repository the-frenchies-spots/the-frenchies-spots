import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, isSelected: boolean) => ({
  container: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 8,
    border: isSelected ? "1px solid #EBA701" : "1px solid #BBB",
    background: isSelected ? "#FBFBFB" : "#E4E4E4",
    cursor: "pointer",
  },
}));
