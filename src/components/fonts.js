import { useFonts } from "expo-font";

export function Fonts() {
  const [fontsLoaded] = useFonts({
    Regular: require("../assets/fonts/Roboto-Regular.ttf"),
    Medium: require("../assets/fonts/Roboto-Medium.ttf"),
    Bold: require("../assets/fonts/Roboto-Bold.ttf"),
  });
  return fontsLoaded;
}
