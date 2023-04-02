import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

// import MapboxGL from "@rnmapbox/maps";

// const MAPBOX_API_KEY =
//   "pk.eyJ1IjoiZnJlbmNoaWVzcG90cyIsImEiOiJjbGZzbmZ3YjEwMDQwM25wZWM1bm96emc4In0.CrgJmxNyiLfQ4QUewh_jXg";

// MapboxGL.setAccessToken(MAPBOX_API_KEY);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: 300,
    width: 300,
    // backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});

type Props = {};

export const MapAndroid = (props: Props) => {
  useEffect(() => {
    //MapboxGL.setTelemetryEnabled(false);
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {/* <MapboxGL.MapView style={styles.map} /> */}
        <Text>MapAndroid</Text>
      </View>
    </View>
  );
};
