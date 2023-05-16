import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Background } from "../../components/Background";
import { styles } from "../../styles";

function ProfileScreen() {
  console.log("It is ProfileScreen. Do you see it?");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Background>
          <View style={styles.badge}>
            {/* визначаємо ОС та налаштовуємо поведінку клавіатури */}
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Текст</Text>
            </KeyboardAvoidingView>
          </View>
        </Background>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProfileScreen;
