import { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

function loadAppFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Regular: require("../assets/fonts/Roboto-Regular.ttf"),
          Medium: require("../assets/fonts/Roboto-Medium.ttf"),
          Bold: require("../assets/fonts/Roboto-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, []);
  return fontsLoaded;
}

export default loadAppFonts;

// const customFonts = [
//   {
//     'Regular': require("../assets/fonts/Roboto-Regular.ttf"),
//     Medium: require("../assets/fonts/Roboto-Medium.ttf"),
//     Bold: require("../assets/fonts/Roboto-Bold.ttf"),
//   },
// ];

// export default customFonts;
