import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context";
import {
  HomePage,
  MapPage,
  SpotFavoritePage,
  ShoppingPage,
  ProfilePage,
  CreateSpotPage,
  AuthPage,
  SpotDetailPage,
} from "../pages";

export type RouteParams = {
  home: undefined;
  spotFavorite: undefined;
  shopping: undefined;
  profile: undefined;
  createSpot: undefined;
  authPage: undefined;
  map: undefined;
  spot: { id: string };
};

const { Navigator, Group, Screen } = createNativeStackNavigator<RouteParams>();

const options = {
  headerShown: false,
  unmountOnBlur: true,
  animationEnabled: false,
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: 0,
    },
  }),
};

export const RootNavigator = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Navigator>
      <Group screenOptions={options}>
        <Screen name="createSpot" component={CreateSpotPage} />
        <Screen name="map" component={MapPage} />
        <Screen name="spot" component={SpotDetailPage} />

        <Screen name="spotFavorite" component={SpotFavoritePage} />

        {!currentUser ? (
          <Screen name="profile" component={AuthPage} />
        ) : (
          <Screen name="profile" component={ProfilePage} />
        )}

        <Screen name="home" component={HomePage} />

        <Screen name="shopping" component={ShoppingPage} />
      </Group>
    </Navigator>
  );
};
