import React, { useCallback } from "react";
import {
  CornerBar,
  Navbar as NavbarMaterial,
  NavbarButton,
  Box,
} from "@frenchies-spots/materials";
import { useNavigation } from "../../../hooks";

export const Navbar = () => {
  const { navigateTo, currentRoute } = useNavigation();

  const isSelectedRoute: (routeName: string) => boolean = useCallback(
    (routeName: string): boolean => {
      return currentRoute === routeName;
    },
    [currentRoute]
  );

  return (
    <Box style={{ position: "absolute", width: "100%", bottom: 0 }}>
      <CornerBar disableContainer={true}>
        <NavbarMaterial>
          <NavbarButton
            name="map-marker"
            isSelected={isSelectedRoute("map")}
            onPress={() => navigateTo("map")}
          />
          <NavbarButton
            name="heart"
            isSelected={isSelectedRoute("spotFavorite")}
            onPress={() => navigateTo("spotFavorite")}
          />
          <NavbarButton
            name="shopping"
            isSelected={isSelectedRoute("shopping")}
            onPress={() => navigateTo("shopping")}
          />
          <NavbarButton
            name="account-circle"
            isSelected={isSelectedRoute("profile")}
            onPress={() => navigateTo("profile")}
          />
        </NavbarMaterial>
      </CornerBar>
    </Box>
  );
};
