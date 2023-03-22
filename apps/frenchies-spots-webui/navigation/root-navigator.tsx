import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage, CreateSpotPage } from "../pages";

export type RouteParams = {
  home: undefined;
  createSpot: undefined;
};

const { Navigator, Group, Screen } = createNativeStackNavigator<RouteParams>();

const options = { headerShown: false, unmountOnBlur: true };

export const RootNavigator = () => {
  // const { currentUser } = useContext(AuthContext);

  return (
    <Navigator>
      <Group>
        <Screen
          name="createSpot"
          component={CreateSpotPage}
          options={options}
        />
        <Screen name="home" component={HomePage} options={options} />
      </Group>
    </Navigator>
  );
};
