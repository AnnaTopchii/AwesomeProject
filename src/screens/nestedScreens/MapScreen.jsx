import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

function MapScreen() {
  console.log("It is MapScreen. Do you see it?");

  return (
    <View style={styles.container}>
      {/* <MapView
        style={styles.mapStyle}
        region={{
          latitude: 50.451,
          longitude: 30.52258,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker
          title="Photo was done here"
          coordinate={{ latitude: 50.451, longitude: 30.52258 }}
        />
      </MapView> */}
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
