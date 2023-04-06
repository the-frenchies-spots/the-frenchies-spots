import "react-native-get-random-values";
import "expo/build/Expo.fx";
import { registerRootComponent } from "expo";
import { Platform } from "react-native";
import { activateKeepAwake } from "expo-keep-awake";
import { createRoot } from "react-dom/client";
import App from "./App";

if (__DEV__) {
  activateKeepAwake();
}

if (Platform.OS === "web") {
  const root = createRoot(
    document.getElementById("root") ?? document.getElementById("main")
  );
  root.render(<App />);
} else {
  registerRootComponent(App);
}
