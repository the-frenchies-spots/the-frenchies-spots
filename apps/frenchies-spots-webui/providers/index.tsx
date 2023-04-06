import React, { type ReactNode } from "react";
import { MaterialsProvider } from "@frenchies-spots/materials";
import AuthProvider from "./auth-provider";
import GraphqlProvider from "./graphql-provider";
import { RootSiblingParent } from "react-native-root-siblings";
import AppProvider from "./app-provider";
import TagProvider from "./tag-provider";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = (props: ProviderProps) => {
  const { children } = props;

  return (
    <GraphqlProvider>
      <MaterialsProvider>
        <AppProvider>
          <AuthProvider>
            <TagProvider>
              <RootSiblingParent>{children}</RootSiblingParent>
            </TagProvider>
          </AuthProvider>
        </AppProvider>
      </MaterialsProvider>
    </GraphqlProvider>
  );
};
