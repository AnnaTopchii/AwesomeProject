import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles";

function CreatePostScreen() {
  console.log("It is CreatePostScreen. Do you see it?");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Текст</Text>
    </View>
  );
}

export default CreatePostScreen;
