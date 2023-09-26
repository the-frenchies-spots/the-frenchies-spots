import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, selected: boolean) => ({
  container: {
    ".mantine-Avatar-placeholder, .mantine-Avatar-placeholderIcon": {
      backgroundColor: selected ? "#E3E3FA" : "#ECECEC",
    },

    overflow: "hidden !important",
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
  picture: { borderRadius: 300, overflow: "hidden" },
  label: { overflow: "hidden" },
}));
