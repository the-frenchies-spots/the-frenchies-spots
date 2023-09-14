import { createStyles } from "@frenchies-spots/material";

export const useStyles = createStyles((theme, isSmallScreen: boolean) => ({
  drawer: isSmallScreen
    ? {
        "	.mantine-Drawer-content": {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
      }
    : {},
}));
