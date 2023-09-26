import { ReactNode } from "react";

import { colors } from "./utils";

import { MantineProvider, type MantineThemeOverride } from "@mantine/core";

const customTheme: MantineThemeOverride = {
  colorScheme: "light",
  colors,
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
};

export type CustomTheme = typeof customTheme;

interface FrSpotsMaterialProviderProps {
  children: ReactNode;
}

export const FrSpotsMaterialProvider = (
  props: FrSpotsMaterialProviderProps
) => {
  const { children } = props;
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
      {children as any}
    </MantineProvider>
  );
};

FrSpotsMaterialProvider.displayName =
  "@frenchies-spots/material/FrSpotsMaterialProvider";
