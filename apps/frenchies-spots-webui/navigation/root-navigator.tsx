import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomePage,
  SpotFavoritePage,
  ShoppingPage,
  ProfilePage,
  CreateSpotPage,
  AuthPage,
} from "../pages";

export type RouteParams = {
  home: undefined;
  spotFavorite: undefined;
  shopping: undefined;
  profile: undefined;
  createSpot: undefined;
  authPage: undefined;
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
  // const { currentUser } = useContext(AuthContext);

  return (
    <Navigator>
      <Group screenOptions={options}>
        <Screen name="authPage" component={AuthPage} />
        <Screen name="profile" component={ProfilePage} />
        <Screen name="createSpot" component={CreateSpotPage} />

        <Screen name="home" component={HomePage} />
        <Screen name="spotFavorite" component={SpotFavoritePage} />
        <Screen name="shopping" component={ShoppingPage} />
      </Group>
    </Navigator>
  );
};
