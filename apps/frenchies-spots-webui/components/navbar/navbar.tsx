import React, { useCallback } from "react";
import {
  Box,
  CornerBar,
  Navbar as NavbarMaterial,
  NavbarButton,
} from "@frenchies-spots/materials";
import { useNavigation } from "../../hooks";

export const Navbar = () => {
  const { navigateTo, currentRoute } = useNavigation();

  const isSelectedRoute: (routeName: string) => boolean = useCallback(
    (routeName: string): boolean => {
      return currentRoute === routeName;
    },
    [currentRoute]
  );

  return (
    <CornerBar>
      <NavbarMaterial>
        <NavbarButton
          name="map-marker"
          isSelected={isSelectedRoute("home")}
          onPress={() => navigateTo("home")}
        />
        <NavbarButton name="landscape" />
        <NavbarButton name="shopping" />
        <NavbarButton name="road-variant" />
        <NavbarButton name="account-circle" />
      </NavbarMaterial>
    </CornerBar>
  );
};
