import React, { type ReactNode } from "react";
import {
  SafeAreaProvider,
  MaterialsProvider,
} from "@frenchies-spots/materials";
import AuthProvider from "./auth-provider";
import GraphqlProvider from "./graphql-provider";
import { RootSiblingParent } from "react-native-root-siblings";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = (props: ProviderProps) => {
  const { children } = props;
  return (
    <GraphqlProvider>
      <MaterialsProvider>
        <AuthProvider>
          <RootSiblingParent>{children}</RootSiblingParent>
        </AuthProvider>
      </MaterialsProvider>
    </GraphqlProvider>
  );
};
