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
  UpdateSpotPage,
  AuthPage,
  SpotDetailPage,
  SpotUserPage,
} from "../pages";

export type RouteParams = {
  home: undefined;
  spotFavorite: undefined;
  shopping: undefined;
  profile: undefined;
  createSpot: undefined;
  updateSpot: { id: string };
  authPage: undefined;
  map: { lat?: number; lng?: number; id?: string } | undefined;
  spot: { id: string };
  spotUser: undefined;
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
        <Screen name="spotUser" component={SpotUserPage} />
        <Screen name="map" component={MapPage} />

        {!currentUser ? (
          <Screen name="profile" component={AuthPage} />
        ) : (
          <Screen name="profile" component={ProfilePage} />
        )}

        <Screen name="spot" component={SpotDetailPage} />

        <Screen name="createSpot" component={CreateSpotPage} />
        <Screen name="spotFavorite" component={SpotFavoritePage} />

        <Screen name="updateSpot" component={UpdateSpotPage} />

        <Screen name="home" component={HomePage} />

        <Screen name="shopping" component={ShoppingPage} />
      </Group>
    </Navigator>
  );
};
