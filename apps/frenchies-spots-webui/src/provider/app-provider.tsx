"use client";
import React, { ReactNode } from "react";
import { GraphqlProvider } from "./graphql-provider";
import { AuthProvider } from "./auth-provider";
import { FrSpotsMaterialProvider } from "@frenchies-spots/material";
import { FrSpotsMapProvider } from "@frenchies-spots/map";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <GraphqlProvider>
      <AuthProvider>
        <FrSpotsMapProvider>
          <FrSpotsMaterialProvider>{children}</FrSpotsMaterialProvider>
        </FrSpotsMapProvider>
      </AuthProvider>
    </GraphqlProvider>
  );
}
