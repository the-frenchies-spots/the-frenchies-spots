import React from "react";
import { theme } from "../theme";
import { ThemeContext } from "../context";

const ThemeContextProvider = ThemeContext.Provider;

type Props = { children: JSX.Element };

const ThemeProvider = (props: Props) => {
  const { children } = props;

  return <ThemeContextProvider value={theme}>{children}</ThemeContextProvider>;
};

export default ThemeProvider;
