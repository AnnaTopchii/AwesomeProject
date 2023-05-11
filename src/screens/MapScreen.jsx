import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";

function MapScreen() {
  console.log("It is MapScreen. Do you see it?");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Текст</Text>
    </View>
  );
}

export default MapScreen;
