import React, { ReactNode } from "react";
import { HStack } from "../stack";
import { styles } from "./navbar-styles";
import { NavbarButton } from "./navbar-button";

interface NavbarProps {
  children?: ReactNode;
}

export const Navbar = (props: NavbarProps) => {
  const { children = null, ...other } = props;

  return (
    <HStack style={styles.navbar} justify="around" mv={15}>
      {children}
    </HStack>
  );
};
