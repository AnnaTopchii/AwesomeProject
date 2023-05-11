import { ImageBackground } from "react-native";

export const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require("../images/Photobg.png")}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center" }}
    >
      {children}
    </ImageBackground>
  );
};
