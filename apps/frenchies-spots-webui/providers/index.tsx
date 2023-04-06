import React, { type ReactNode } from "react";
import {
  SafeAreaProvider,
  MaterialsProvider,
} from "@frenchies-spots/materials";
import AuthProvider from "./auth-provider";
import GraphqlProvider from "./graphql-provider";
import { RootSiblingParent } from "react-native-root-siblings";
import AppProvider from "./app-provider";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = (props: ProviderProps) => {
  const { children } = props;
  return (
    <GraphqlProvider>
      <MaterialsProvider>
        <AuthProvider>
          <AppProvider>
            <RootSiblingParent>{children}</RootSiblingParent>
          </AppProvider>
        </AuthProvider>
      </MaterialsProvider>
    </GraphqlProvider>
  );
};
