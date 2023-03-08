import React from 'react';
import { theme } from './theme';
import { ThemeContext } from './theme-context';

const ThemeContextProvider = ThemeContext.Provider;

type Props = { children: JSX.Element };

export const ThemeProvider = (props: Props) => {
  const { children } = props;

  return (
    <ThemeContextProvider value={theme}>{children}</ThemeContextProvider>
  );
};
