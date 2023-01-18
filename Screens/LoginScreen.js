import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  Alert,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";
import React from "react";

export default function LoginScreen({ navigation }) {
  // const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  //   const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/Photo_BG.png")}
          style={styles.image}
        >
          <View style={{ ...styles.viewBox }}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "android" ? "padding" : "height"}
            >
              <View style={styles.titleBox}>
                <Text style={styles.registrationTitle}>Login</Text>
              </View>
              <View
                style={{
                  ...styles.inputBox,
                }}
              >
                <TextInput
                  value={email}
                  onChangeText={emailHandler}
                  placeholder="Email"
                  autoComplete="email"
                  style={styles.input}
                  onFocus={() => setIsHidden(!isHidden)}
                  onBlur={() => setIsHidden(!isHidden)}
                />
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.input}
                  onFocus={() => setIsHidden(!isHidden)}
                  onBlur={() => setIsHidden(!isHidden)}
                />
              </View>
              {isHidden ? null : (
                <>
                  <View style={styles.registerBtnViewBox}>
                    <TouchableOpacity
                      style={{
                        ...styles.registerButton,
                      }}
                      onPress={onLogin}
                    >
                      <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Register")}
                    >
                      <Text style={styles.belowRegisterBtnText}>
                        Don't have an account yet? Sign Up
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
    // justifyContent: "center",
  },
  viewBox: {
    backgroundColor: "#fff",
    paddingTop: 30,
    width: "100%",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // alignContent: "flex-end",
    paddingLeft: 16,
    paddingRight: 16,
    // flex: 1,
    justifyContent: "center",
  },
  // container: {
  //   flex: 1,
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    // alignItems: "center",
  },
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  inputBox: {
    marginBottom: 32,
  },
  input: {
    width: "100%",
    fontSize: 16,
    color: "#BDBDBD",
    height: 50,
    padding: 16,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    marginBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 8,
  },

  // image: {
  //   flex: 1,
  //   justifyContent: "center",
  // },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0",
  },
  titleBox: {
    marginBottom: 33,
  },
  registrationTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  registerBtnViewBox: {
    marginBottom: 100,
  },
  registerButton: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    height: 50,

    marginTop: 8,
  },
  belowRegisterBtnText: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  avatarBox: {
    backgroundColor: "#F6F6F6",
    height: 120,
    width: 120,
    position: "absolute",
    top: -161,
    left: "33%",
    borderRadius: 16,
  },
  addAvatarBtn: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    borderWidth: 1,
    borderColor: "#FF6C00",
    position: "absolute",
    bottom: 14,
    right: -11,
    // // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
  btnRectangle: {
    fontSize: 20,
    color: "#FF6C00",
    fontWeight: "300",
    position: "absolute",
    top: -2,
    right: "37%",
  },
  btnRectangleRotate: {
    fontSize: 20,
    fontWeight: "300",
    color: "#FF6C00",
    position: "absolute",
    top: -1,
    right: 7.5,
    transform: [{ rotate: "90deg" }],
  },
});
