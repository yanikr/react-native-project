import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";
const Item = () => (
  <View style={styles.itemViewBox}>
    <Image
      source={require("../images/svg/user-photo.png")}
      style={styles.userImage}
    />
    <View style={styles.textWrap}>
      <Text style={styles.textName}>Natali Romanova</Text>
      <Text>email@example.com</Text>
    </View>
  </View>
);
export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Item />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15,
    // justifyContent: "center",
    // alignItems: "center",
    borderBottomColor: "#B3B3B3",
    borderTopColor: "#B3B3B3",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  itemViewBox: {
    height: 60,
    display: "flex",
    flexDirection: "row",
  },
  userImage: {
    height: 60,
    width: 60,
    marginRight: 8,
    borderRadius: 16,
  },
  textWrap: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  textName: {
    fontSize: 13,
    fontWeight: "700",
  },
  textEmail: {
    fontSize: 11,
    fontWeight: 400,
  },
});
