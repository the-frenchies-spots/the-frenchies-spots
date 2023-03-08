import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage, ProfilePage, AuthPage } from "../pages";
import { SpotExploreurPage } from "../pages/spot-exploreur-page/spot-exploreur-page";
import { SpotPage } from "../pages/spot-page/spot-page";
import { ShopPage } from "../pages/shop-page/shop-page";
import { AccountPage } from "../pages/account-page/account-page";
import { AuthContext } from "../context";
import { CreateSpotPage } from "../pages/create-spot-page/create-spot-page";
import { ProfileSpotPage } from "../pages/profile-spot-page/profile-spot-page";
import { UpdateSpotPage } from "../pages/update-spot-page/update-spot-page";
import { FavoriteSpotPage } from "../pages/favorite-spot-page/favorite-spot-page";
import { MapPage } from "../pages/map-page/map-page";

export type RouteParams = {
  home: undefined;
  spotExploreur: undefined;
  profile: { id: string };
  map: { lat: number | undefined; lng: number | undefined };
  itinary: undefined;
  shop: undefined;
  spot: { id: string };
  account: undefined;
  createSpot: undefined;
  updateSpot: { id: string };
  profileSpot: undefined;
  favorite: undefined;
};

const { Navigator, Group, Screen } = createNativeStackNavigator<RouteParams>();

const options = { headerShown: false, unmountOnBlur: true };

export const RootNavigator = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Navigator>
      <Group>
        <Screen name="home" component={HomePage} options={options} />
        <Screen name="map" component={MapPage} options={options} />

        <Screen
          name="favorite"
          component={FavoriteSpotPage}
          options={options}
        />

        <Screen
          name="spotExploreur"
          component={SpotExploreurPage}
          options={options}
        />

        <Screen
          name="spot"
          component={SpotPage}
          options={{
            animation: "slide_from_right",
            ...options,
          }}
        />

        <Screen
          name="updateSpot"
          component={UpdateSpotPage}
          options={options}
        />

        <Screen
          name="createSpot"
          component={CreateSpotPage}
          options={options}
        />

        <Screen name="shop" component={ShopPage} options={options} />
        {currentUser ? (
          <Screen name="account" component={AccountPage} options={options} />
        ) : (
          <Screen name="account" component={AuthPage} options={options} />
        )}

        <Screen
          name="profile"
          component={ProfilePage}
          options={{
            animation: "slide_from_right",
            ...options,
          }}
        />
        <Screen
          name="profileSpot"
          component={ProfileSpotPage}
          options={options}
        />
      </Group>
    </Navigator>
  );
};
