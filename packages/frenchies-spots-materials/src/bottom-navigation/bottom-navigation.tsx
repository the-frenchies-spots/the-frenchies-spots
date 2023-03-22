import React, { useState } from "react";
import {
  BottomNavigation as BottomNavigationPaper,
  Text,
} from "react-native-paper";

import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export const BottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "music", title: "Music", icon: "queue-music", color: "#009688" },
    { key: "albums", title: "Albums", icon: "album", color: "#3F51B5" },
    { key: "recents", title: "Recents", icon: "history", color: "#009688" },
  ]);

  const renderScene = BottomNavigationPaper.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigationPaper
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ borderWidth: 5, borderColor: "red" }}
    />
  );
};
