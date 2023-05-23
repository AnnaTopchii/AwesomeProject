import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../nestedScreens/DefaultPostsScreens";
import MapScreen from "../nestedScreens/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";

const NestedStack = createStackNavigator();

function PostsScreen() {
  return (
    <NestedStack.Navigator initialRouteName="DefaultPostsScreen">
      <NestedStack.Screen
        name="Default"
        component={DefaultPostsScreen}
        options={{ headerShown: false }}
      />
      <NestedStack.Screen name="MapScreen" component={MapScreen} />
      <NestedStack.Screen name="Comments" component={CommentsScreen} />
    </NestedStack.Navigator>
  );
}

export default PostsScreen;
