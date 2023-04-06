import React, { type ReactNode } from "react";
import { NativePaperProvider } from "./native-paper-provider";
import { SafeAreaProvider } from "./safe-area-provider";

interface MaterialsProviderProps {
  children: ReactNode;
}

export const MaterialsProvider = (props: MaterialsProviderProps) => {
  const { children } = props;
  return (
    <SafeAreaProvider>
      <NativePaperProvider>{children}</NativePaperProvider>
    </SafeAreaProvider>
  );
};
