import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
} from "react-native";
import { Background } from "../components/Background";
import { styles } from "../styles";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const navigation = useNavigation();

  const onLogin = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
  };
  const onShowPassword = () => {
    console.log(password);
  };

  console.log("It is LoginScreen. Do you see it?");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Background>
          <View style={styles.badge}>
            {/* визначаємо ОС та налаштовуємо поведінку клавіатури */}
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Увійти</Text>
              <View style={{ display: "flex", gap: 16, marginBottom: 43 }}>
                <TextInput
                  placeholder="Адреса електронної пошти"
                  onChangeText={emailHandler}
                  value={email}
                  style={styles.input}
                  autoFocus
                />
                <TextInput
                  placeholder="Пароль"
                  onChangeText={passwordHandler}
                  value={password}
                  style={styles.input}
                  secureTextEntry
                />
                <Pressable onPressIn={onShowPassword}>
                  <Text style={styles.linkText}>
                    Показати
                    {/* {pressed ? "Показати" : "Заховати"} */}
                  </Text>
                </Pressable>
              </View>
            </KeyboardAvoidingView>
            <Button title={"Login"} onPress={onLogin} style={styles.button}>
              Увійти
            </Button>
            <Button
              style={styles.linkText}
              title="Немає акаунту? Зареєструватися"
              onPress={() => navigation.navigate("Registration")}
            />
          </View>
        </Background>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
