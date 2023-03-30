import { StyleSheet, View } from "react-native";
import "@expo/match-media";
import { StatusBar } from "expo-status-bar";
import { RootNavigator } from "./navigation/root-navigator";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "./providers";
import { AppContainer } from "./components";

const App = () => {
  return (
    <Provider>
      <AppContainer>
        <NavigationContainer>
          <RootNavigator />

          <StatusBar hidden={true} />
        </NavigationContainer>
      </AppContainer>
    </Provider>
  );
};

export default App;
