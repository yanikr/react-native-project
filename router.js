import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

import { TouchableOpacity, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { PostsScreen } from "./Screens/nestedScreens/PostsScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";
// import { MapScreen } from "./Screens/nestedScreens/MapScreen";
import db from "./firebase/config";
import { authSignOutUser } from "./redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isLoggedIn) => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
  };
  if (!isLoggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={size}
              color={focused ? "#fff" : "#4D4D4D"}
            />
          ),
          headerTitleAlign: "center",

          tabBarActiveBackgroundColor: "#FF6C00",
          tabBarInactiveBackgroundColor: "#fff",
          tabBarStyle: {
            height: 80,
          },
          tabBarItemStyle: {
            alignSelf: "center",
            width: 70,
            height: 40,
            borderRadius: 20,
            marginLeft: 90,
          },

          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity
                style={{ height: 20 }}
                onPress={signOut}
                color="green"
                title="sign-out"
              >
                <Image source={require("./images/svg/log-out.png")} />
              </TouchableOpacity>
            </View>
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="add"
              size={30}
              color={focused ? "#fff" : "#4D4D4D"}
            />
          ),
          tabBarHideOnKeyboard: true,
          headerTitleAlign: "center",
          tabBarActiveBackgroundColor: "#FF6C00",
          tabBarInactiveBackgroundColor: "#fff",
          tabBarStyle: {
            height: 80,
            display: "none",
          },
          tabBarItemStyle: {
            alignSelf: "center",
            width: 70,
            height: 40,
            borderRadius: 20,
          },
          headerLeft: ({ focused }) => (
            <View style={{ marginLeft: 20 }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color={focused ? "#fff" : "#4D4D4D"}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity
                style={{ height: 20 }}
                onPress={signOut}
                color="green"
                title="sign-out"
              >
                <Image source={require("./images/svg/log-out.png")} />
              </TouchableOpacity>
            </View>
          ),
        })}
        name="Create post"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name="user"
              size={size}
              color={focused ? "#fff" : "#4D4D4D"}
            />
          ),
          headerShown: false,
          headerTitleAlign: "center",
          tabBarActiveBackgroundColor: "#FF6C00",
          tabBarInactiveBackgroundColor: "#fff",

          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            if (routeName === "Comments" || routeName === "Map") {
              return { display: "none" };
            }
            return { height: 80 };
          })(route),
          tabBarItemStyle: {
            alignSelf: "center",
            width: 70,
            height: 40,
            borderRadius: 20,
            marginRight: 90,
          },
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity
                style={{ height: 20 }}
                onPress={signOut}
                color="green"
                title="sign-out"
              >
                <Image source={require("./images/svg/log-out.png")} />
              </TouchableOpacity>
            </View>
          ),
        })}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
// {
//   /* <MainTab.Screen name="Map" component={MapScreen} />; */
// }
