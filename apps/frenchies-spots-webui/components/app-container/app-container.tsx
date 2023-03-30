import React, { ReactNode } from "react";
import { Box } from "@frenchies-spots/materials";
import { styles } from "./app-container-styles";

interface AppContainerProps {
  children: ReactNode;
}

export const AppContainer = (props: AppContainerProps) => {
  const { children } = props;
  return <Box style={styles.container}>{children}</Box>;
};
