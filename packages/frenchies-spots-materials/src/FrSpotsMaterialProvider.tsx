import { ReactNode } from "react";

import { colors, initColors } from "./utils";

import {
  ButtonStylesParams,
  MantineProvider,
  type MantineThemeOverride,
} from "@mantine/core";

const customTheme: MantineThemeOverride = {
  colorScheme: "light",
  colors,
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  components: {
    // Button: {
    //   styles: (theme, params: ButtonStylesParams, { variant }) => {
    //     const currentColor: string = params.color;
    //     let bgColor = initColors["yellow"][0];
    //     let hoverColor = initColors["yellow"][1];
    //     if (currentColor in initColors) {
    //       bgColor = initColors[currentColor as keyof typeof initColors][0];
    //       hoverColor = initColors[currentColor as keyof typeof initColors][1];
    //     }
    //     return {
    //       root: {
    //         backgroundColor: variant === "filled" ? bgColor : undefined,
    //         transition: "background-color 0.3s ease",
    //         "&:hover": {
    //           backgroundColor: variant === "filled" ? hoverColor : undefined,
    //         },
    //       },
    //     };
    //   },
    // },
  },
};

export type CustomTheme = typeof customTheme;

interface FrSpotsMaterialProviderProps {
  children: ReactNode;
}

export const FrSpotsMaterialProvider = ({
  children,
}: FrSpotsMaterialProviderProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
      {children}
    </MantineProvider>
  );
};

FrSpotsMaterialProvider.displayName =
  "@frenchies-spots/material/FrSpotsMaterialProvider";
