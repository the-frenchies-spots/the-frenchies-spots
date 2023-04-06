import React, { type ReactNode } from "react";
import { MD3LightTheme, Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";

interface ProviderProps {
  children: ReactNode;
}

export const NativePaperProvider = (props: ProviderProps) => {
  const { children } = props;
  const [fontLoaded] = useFonts({
    "Montserrat-Bold": require("../fonts/Montserrat/static/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("../fonts/Montserrat/static/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("../fonts/Montserrat/static/Montserrat-Regular.ttf"),
  });

  if (!fontLoaded) return null;
  return <PaperProvider theme={MD3LightTheme}>{children}</PaperProvider>;
};
