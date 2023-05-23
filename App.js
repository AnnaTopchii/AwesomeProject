import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRoute } from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./src/assets/fonts/Roboto-Regular.ttf"),
    Medium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    Bold: require("./src/assets/fonts/Roboto-Bold.ttf"),
  });
  const routing = useRoute({});

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
