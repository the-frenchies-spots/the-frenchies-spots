import React, { type ReactNode } from "react";
import {
  SafeAreaProvider,
  MaterialsProvider,
} from "@frenchies-spots/materials";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = (props: ProviderProps) => {
  const { children } = props;
  return <MaterialsProvider>{children}</MaterialsProvider>;
};
