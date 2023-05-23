import React, { useState, useEffect } from "react";
// import { styles } from "../../styles";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

const initialState = {
  photo: "",
  name: "",
  location: "",
};

function CreatePostScreen({ navigation }) {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [state, setState] = useState(initialState);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardOpen(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardOpen(false);
    });

    // cleanup function
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    const photo = await cameraRef.takePictureAsync();
    await MediaLibrary.createAssetAsync(photo.uri);
    setState({ photo: photo.uri });
  };

  const sendPost = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);
    navigation.navigate("Posts", { state });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {!keyboardOpen && (
          <>
            <Camera style={styles.camera} ref={setCameraRef}>
              {state.photo && (
                <View style={styles.photoContainer}>
                  <Image source={{ uri: state.photo }} style={styles.photo} />
                </View>
              )}
              <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
                <Ionicons name="camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </Camera>
            <Text style={styles.text}>Завантажити фото</Text>
          </>
        )}
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.formContainer,
              // marginBottom: keyboardOpen ? 32 : 43,
            }}
          >
            <TextInput
              placeholder="Назва"
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, title: value }))
              }
              value={state.title}
              style={{ ...styles.input, fontFamily: "Medium" }}
              placeholderStyle={styles.placeholder}
            />
            <TextInput
              placeholder="Місцевість"
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, location: value }))
              }
              value={state.location}
              style={styles.input}
              placeholderStyle={styles.placeholder}
            />
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.sendButton} onPress={sendPost}>
          <Text style={styles.sendButtonText}> Опублікувати </Text>
        </TouchableOpacity>

        {!keyboardOpen && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => setState(initialState)}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CreatePostScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    fontFamily: "Regular",
    backgroundColor: "#FFFFFF",
  },
  camera: {
    height: 240,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  photoContainer: {
    position: "absolute",
    height: 240,
  },
  photo: {
    height: 240,
  },
  cameraButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButton: {
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  sendButtonText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  text: {
    marginTop: 8,
    color: "#BDBDBD",
    lineHeight: 19,
    fontSize: 16,
  },
  formContainer: {
    marginTop: 32,
    display: "flex",
    gap: 16,
  },
  input: {
    justifyContent: "center",
    height: 50,
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    fontFamily: "Regular",
    // padding: 16,
  },
  placeholder: {
    color: "#BDBDBD",
    lineHeight: 19,
    fontSize: 16,
    fontFamily: "Regular",
  },
  deleteButton: {
    marginBottom: 34,
    marginTop: "auto",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  // image: {
  //   position: "absolute",
  //   width: 120,
  //   height: 120,
  //   borderRadius: 16,
  //   backgroundColor: "#F6F6F6",
  //   top: -152,
  //   alignSelf: "center",
  // },
  // iconButton: {
  //   position: "absolute",
  //   left: 108,
  //   top: 80,
  //   width: 25,
  //   height: 25,
  //   borderRadius: 12,
  //   borderWidth: 1,
  //   borderColor: "#FF6C00",
  // },
  // button: {
  //   backgroundColor: "#FF6C00",
  //   padding: 16,
  //   borderRadius: 100,
  //   marginBottom: 16,
  // },
  // buttonText: {
  //   color: "#FFFFFF",
  //   fontSize: 16,
  //   lineHeight: 19,
  //   textAlign: "center",
  // },
  // linkContainer: {
  //   display: "flex",
  //   flexDirection: "row",
  //   gap: 10,
  //   alignSelf: "center",
  // },
  // linkText: {
  //   color: "#1B4371",
  //   fontSize: 16,
  //   lineHeight: 19,
  // },
});
