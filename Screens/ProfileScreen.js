import React from "react";
// import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./nestedScreens/HomeScreen";
import { CommentsScreen } from "./nestedScreens/CommentsScreen";
import { MapScreen } from "./nestedScreens/MapScreen";
import { useNavigation } from "@react-navigation/native";

const NestedScreen = createStackNavigator();

export const ProfileScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          title: "Comments",
        })}
      />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};
