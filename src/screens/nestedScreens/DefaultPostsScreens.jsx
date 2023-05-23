import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Button,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

function DefaultPostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <>
            <View style={styles.photoContainer}>
              <Image style={styles.photo} source={{ uri: item.photo }} />
            </View>
            <Button title="Map" onPress={() => navigation.navigate("Map")} />
            <Button
              title="Comments"
              onPress={() => navigation.navigate("Comments")}
            />
          </>
        )}
      />
    </SafeAreaView>
  );
}

export default DefaultPostsScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    fontFamily: "Regular",
    backgroundColor: "#FFFFFF",
  },
  photoContainer: {
    height: 240,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  photo: {
    height: 240,
  },
});
