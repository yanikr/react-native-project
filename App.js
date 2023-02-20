import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// import { AppLoading } from "expo";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  View,
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

import { Main } from "./components/Main";
// const loadApplication = async () => {
//   await Font.loadAsync({
//     Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
//   });
// };
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [iasReady, setIasReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
          // "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttfttf"),
          // "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIasReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (iasReady) {
      await SplashScreen.hideAsync();
    }
  }, [iasReady]);
  if (!iasReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Main />
      </View>
    </Provider>
  );
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
