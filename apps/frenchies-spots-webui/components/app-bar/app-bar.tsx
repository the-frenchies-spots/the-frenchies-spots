import React, { useCallback } from "react";
import {
  Stack,
  StackProps,
  Typography,
  Container,
  ContainerProps,
} from "../../materials";
import { useTheme } from "../../hooks";
import { styles } from "./app-bar-styles";
import AppBarButton from "./app-bar-button/app-bar-button";
import { useNavigation } from "../../hooks";

type AppBarProps = ContainerProps;

const AppBar = (props: AppBarProps) => {
  const { ...other } = props;

  const style = useTheme(styles);
  const { navigateTo, currentRoute } = useNavigation();

  const isSelectedRoute: (routeName: string) => boolean = useCallback(
    (routeName: string): boolean => {
      return currentRoute === routeName;
    },
    [currentRoute]
  );

  // const routesNavBar: Record<string, string>[] = [
  //   { name: "map", icone: "map-marker" },
  //   { name: "spot", icone: "landscape" },
  //   { name: "shop", icone: "shopping" },
  //   { name: "itinary", icone: "road-variant" },
  //   { name: "profile", icone: "account-circle" },
  // ];

  return (
    <Container
      direction="row"
      {...other}
      style={style.container}
      justify="space-around"
      align="center"
    >
      <AppBarButton
        name="map-marker"
        onPress={() => navigateTo("map", { lat: undefined, lng: undefined })}
        isSelected={isSelectedRoute("map")}
      />
      <AppBarButton
        name="landscape"
        onPress={() => navigateTo("spotExploreur")}
        isSelected={isSelectedRoute("spotExploreur") || isSelectedRoute("spot")}
      />
      <AppBarButton
        name="shopping"
        onPress={() => navigateTo("shop")}
        isSelected={isSelectedRoute("shop")}
      />
      <AppBarButton
        name="road-variant"
        // onPress={() => navigateTo("itinary")}
        isSelected={isSelectedRoute("itinary")}
      />
      <AppBarButton
        name="account-circle"
        onPress={() => navigateTo("account")}
        isSelected={isSelectedRoute("account")}
      />
    </Container>
  );
};

export default AppBar;
