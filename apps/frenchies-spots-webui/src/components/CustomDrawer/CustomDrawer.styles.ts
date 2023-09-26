import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, isSmallScreen: boolean) => ({
  drawer: isSmallScreen
    ? {
        "	.mantine-Drawer-content": {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
        "	.mantine-Drawer-header": {
          marginTop: 20,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
        "	.mantine-Drawer-close": {
          color: "white",
          borderColor: "white",
          display: "none",
        },
        zIndex: 10000,
      }
    : { zIndex: 100000 },
  bar: { width: 90, height: 5, background: "#BBB", borderRadius: 50 },
}));
