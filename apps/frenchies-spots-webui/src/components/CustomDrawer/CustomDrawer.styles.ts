import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, isSmallScreen: boolean) => ({
  drawer: isSmallScreen
    ? {
        "	.mantine-Drawer-content": {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
        "	.mantine-Drawer-header": {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderTop: `1px solid ${theme.colors.darkGrey[0]}`,
        },
        "	.mantine-Drawer-close": {
          color: "white",
        },
      }
    : {},
  bar: { width: 90, height: 5, background: "#BBB", borderRadius: 50 },
}));
