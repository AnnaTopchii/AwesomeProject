import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";

function CommentsScreen() {
  console.log("It is CommentsScreen. Do you see it?");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Текст</Text>
    </View>
  );
}

export default CommentsScreen;
