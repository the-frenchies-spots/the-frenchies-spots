import React, { type ReactNode } from "react";
import {
  SafeAreaProvider,
  MaterialsProvider,
} from "@frenchies-spots/materials";
import AuthProvider from "./auth-provider";
import GraphqlProvider from "./graphql-provider";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = (props: ProviderProps) => {
  const { children } = props;
  return (
    <GraphqlProvider>
      <AuthProvider>
        <MaterialsProvider>{children}</MaterialsProvider>
      </AuthProvider>
    </GraphqlProvider>
  );
};
