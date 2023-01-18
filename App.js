import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import {
  StyleSheet,
  // View,
  // TextInput,
  // TouchableWithoutFeedback,
  // Keyboard,
  // KeyboardAvoidingView,
  // ImageBackground,
  // Platform,
  // Alert,
  // Button,
  // Text,
} from "react-native";

export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     ...Platform.select({
//       ios: {
//         backgroundColor: "#000000",
//       },
//       android: {
//         backgroundColor: "#ffffff",
//       },
//     }),
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1",
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 10,
//   },
// });
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // alignItems: "center",
  //   // justifyContent: "center",
  // },
  // input: {
  //   width: 200,
  //   height: 44,
  //   padding: 10,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   marginBottom: 10,
  //   marginLeft: "auto",
  //   marginRight: "auto",
  // },
  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   // justifyContent: "center",
  //   // alignItems: "center",
  // },
  // text: {
  //   color: "white",
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   backgroundColor: "#000000c0",
  // },
});

{
  /* <View style={styles.container}>
  <ImageBackground
    source={require("./images/Photo_BG.png")}
    style={styles.image}
  >
    {loginPage ? (
      <LoginScreen toggleState={loginPage} nextPage={nextPage}></LoginScreen>
    ) : (
      <RegistrationScreen
        toggleState={loginPage}
        nextPage={nextPage}
      ></RegistrationScreen>
    )}
  </ImageBackground>
</View>; */
}
