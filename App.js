import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "./src/components/fonts";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
// import PostsScreen from "./src/screens/PostsScreen";

const MainStack = createStackNavigator();

export default function App() {
  if (!Fonts) {
    return null;
  }

  console.log("Do you see it?");

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        {/* <MainStack.Screen name="Posts" component={PostsScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
