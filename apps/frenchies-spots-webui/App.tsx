import React from "react";
import "@expo/match-media";
import "./translate";
import { RootNavigator } from "./navigation/root-navigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Providers } from "./providers";

const App = () => {
  return (
    <Providers>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Providers>
  );
};

export default App;
