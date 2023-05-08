import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./src/assets/fonts/Roboto-Regular.ttf"),
    Medium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    Bold: require("./src/assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RegistrationScreen>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={{ fontFamily: "Regular", fontSize: 30 }}>Roboto_400</Text>
        <Text style={{ fontFamily: "Medium", fontSize: 30 }}>Roboto_500</Text>
        <Text style={{ fontFamily: "Bold", fontSize: 30 }}>Roboto_700</Text>
        <StatusBar style="auto" />
      </RegistrationScreen>
    </View>
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
