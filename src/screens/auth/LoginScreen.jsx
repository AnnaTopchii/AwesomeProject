import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  View,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  StyleSheet,
  isFocused,
} from "react-native";
import { Background } from "../../components/Background";

const initialState = {
  email: "",
  password: "",
};

function LoginScreen() {
  const [state, setState] = useState(initialState);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [emailInputIsFocused, setEmailInputIsFocused] = useState(false);
  const [passwordInputIsFocused, setPasswordInputIsFocused] = useState(false);

  const navigation = useNavigation();

  const onLogin = () => {
    navigation.navigate("Home");
    console.log(state);
    setState(initialState);
  };
  const onShowPassword = () => {
    console.log(password);
  };

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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Background>
          <View
            style={{
              ...styles.badge,
              paddingTop: 32,
              paddingBottom: keyboardOpen ? 0 : 132,
            }}
          >
            {/* визначаємо ОС та налаштовуємо поведінку клавіатури */}
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Авторизація</Text>
              <View
                style={{
                  ...styles.formContainer,
                  marginBottom: keyboardOpen ? 32 : 43,
                }}
              >
                <TextInput
                  placeholder="Адреса електронної пошти"
                  keyboardType="email-address"
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  value={state.email}
                  style={{
                    ...styles.input,
                    borderColor: emailInputIsFocused ? "#FF6C00" : "#E8E8E8",
                    backgroundColor: emailInputIsFocused
                      ? "#FFFFFF"
                      : "#F6F6F6",
                  }}
                  onFocus={() => setEmailInputIsFocused(true)}
                  onBlur={() => setEmailInputIsFocused(false)}
                  // autoFocus={true}
                />
                <TextInput
                  placeholder="Пароль"
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  value={state.password}
                  style={{
                    ...styles.input,
                    borderColor: passwordInputIsFocused ? "#FF6C00" : "#E8E8E8",
                    backgroundColor: passwordInputIsFocused
                      ? "#FFFFFF"
                      : "#F6F6F6",
                  }}
                  onFocus={() => setPasswordInputIsFocused(true)}
                  onBlur={() => setPasswordInputIsFocused(false)}
                  secureTextEntry={true}
                />
                {/* <Pressable onPressIn={onShowPassword}>
                  <Text style={styles.linkText}>
                    Показати
                    {pressed ? "Показати" : "Заховати"}
                  </Text>
                </Pressable> */}
              </View>
            </KeyboardAvoidingView>
            {!keyboardOpen && (
              <>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={onLogin}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>
                <View style={styles.linkContainer}>
                  <Text style={styles.linkText}>Немає акаунту?</Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    <Text style={styles.linkText}>Зареєструватися</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </Background>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Regular",
  },
  badge: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    justifyContent: "flex-end",
  },
  title: {
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    lineHeight: 35,
    fontSize: 30,
    letterSpacing: 0.01,
    fontFamily: "Medium",
  },
  formContainer: {
    display: "flex",
    gap: 16,
  },
  input: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignSelf: "center",
  },
  linkText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});
