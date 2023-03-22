import React, { type ReactNode } from "react";
import { SafeAreaProvider as SafeAreaProviderContext } from "react-native-safe-area-context";

interface ProviderProps {
  children: ReactNode;
}

export const SafeAreaProvider = (props: ProviderProps) => {
  const { children } = props;
  return <SafeAreaProviderContext>{children}</SafeAreaProviderContext>;
};
