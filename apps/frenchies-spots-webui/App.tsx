import { StyleSheet, View } from "react-native";
import "@expo/match-media";
import { StatusBar } from "expo-status-bar";
import { RootNavigator } from "./navigation/root-navigator";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "./providers";

export default function Native() {
  return (
    <Provider>
      <View style={styles.container}>
        <NavigationContainer>
          <RootNavigator />
          <StatusBar hidden={true} />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
