import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native";
import PostsScreen from "./main/PostsScreen";
import CreatePostScreen from "./main/CreatePostScreen";
import ProfileScreen from "./main/ProfileScreen";

const MainTab = createBottomTabNavigator();

function Home() {
  console.log("It is Home. Do you see it?");

  return (
    <MainTab.Navigator
      initialRouteName="Публікації"
      screenOptions={{
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingHorizontal: 60,
        },
        headerTitleAlign: "center",
        headerTintColor: "#212121",
        headerTitleStyle: {
          fontFamily: "Medium",
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.4,
        },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації ",
          tabBarIcon: () => (
            <Ionicons name="grid-outline" size={24} color="#212121" />
          ),
          tabBarLabel: () => {
            return null;
          },
          tabBarItemStyle: {
            height: 40,
            width: 40,
          },
          headerRight: () => (
            <TouchableHighlight
              activeOpacity={0.6}
              onPress={() => alert("You want to log out!")}
              style={{ marginRight: 10 }}
            >
              <Ionicons name="log-out-outline" size={24} color="#BDBDBD" />
            </TouchableHighlight>
          ),
        }}
      />
      <MainTab.Screen
        name="Create Post"
        component={CreatePostScreen}
        options={{
          title: "Створити публікацію",
          tabBarIcon: () => (
            <Ionicons name="add-outline" size={24} color="#FFFFFF" />
          ),
          tabBarLabel: () => {
            return null;
          },
          tabBarItemStyle: {
            backgroundColor: "#FF6C00",
            borderRadius: 20,
            height: 40,
            width: 70,
            marginHorizontal: 30,
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="#212121" />
          ),
          tabBarLabel: () => {
            return null;
          },
          tabBarItemStyle: {
            height: 40,
            width: 40,
          },
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
}

export default Home;
