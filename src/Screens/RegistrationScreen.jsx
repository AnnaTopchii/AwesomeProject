import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  Pressable,
} from "react-native";
import { Background } from "../components/Background";
import { styles } from "../styles";

function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const navigation = useNavigation();

  const onRegister = ({ navigation }) => {
    Alert.alert("Credentials", `${login} + ${email} + ${password}`);
  };
  const onShowPassword = () => {
    console.log(password);
  };

  console.log("It is RegistrationScreen. Do you see it?");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Background>
          <View style={styles.badge}>
            {/* визначаємо ОС та налаштовуємо поведінку клавіатури */}
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Image style={styles.image} />
              <Button
                title={"Photo"}
                style={styles.iconButton}
                onPress={onRegister}
              />

              <Text style={styles.title}>Реєстрація</Text>
              <View style={{ display: "flex", gap: 16, marginBottom: 43 }}>
                <TextInput
                  placeholder="Логін"
                  onChangeText={loginHandler}
                  value={login}
                  style={styles.input}
                  autoFocus
                />
                <TextInput
                  placeholder="Адреса електронної пошти"
                  onChangeText={emailHandler}
                  value={email}
                  style={styles.input}
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
            <Button
              title={"Register"}
              onPress={onRegister}
              style={styles.button}
            >
              Зареєструватися
            </Button>
            <Text style={styles.linkText}>Вже є обліковий запис? Увійти</Text>
            <Button
              style={styles.linkText}
              title="Вже є обліковий запис? Увійти"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </Background>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RegistrationScreen;
