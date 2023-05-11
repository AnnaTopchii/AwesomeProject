import { ImageBackground } from "react-native";
import BackgroundImage from "../images/Photobg.png";

export const Background = () => {
  return <ImageBackground source={BackgroundImage} resizeMode="cover" />;
};
