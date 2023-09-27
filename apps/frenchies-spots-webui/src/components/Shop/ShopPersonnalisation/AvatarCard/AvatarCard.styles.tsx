import { createStyles } from "@frenchies-spots/material";

interface StyleParams {
  isOpen: boolean;
  isSelected: boolean;
}
export const useStyles = createStyles((theme, params: StyleParams) => ({
  container: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 8,
    border: params?.isSelected
      ? "1px solid #B68973"
      : params?.isOpen
      ? "1px solid #EBA701"
      : "1px solid #BBB",
    background: params?.isOpen ? "#FBFBFB" : "#E4E4E4",
    cursor: "pointer",
  },
}));
