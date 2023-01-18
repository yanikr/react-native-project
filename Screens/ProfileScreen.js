import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";

export const ProfileScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts((prevState) => [route.params, ...prevState]);
  }, [route.params]);
  console.log(route.params);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../images/Photo_BG.png")}
      >
        <View style={{ ...styles.profileViewBox }}>
          <View style={styles.profileAvatarBox}>
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://armineh.files.wordpress.com/2019/10/photo-1479936343636-73cdc5aae0c3.jpg?w=720",
              }}
            />
            <TouchableOpacity style={styles.profileAvatarBtn}>
              <Text style={styles.btnRectangle}>I</Text>
              <Text style={styles.btnRectangleRotate}>I</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.profileTitle}>Natalie Romanova</Text>
          <FlatList
            style={{ overflow: "hidden" }}
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.postImage}>
                <Image
                  style={{
                    width: "100%",
                    height: 240,
                    marginBottom: 10,
                    // backgroundColor: "#E8E8E8",
                    borderRadius: 8,
                  }}
                  source={{ uri: item.image }}
                />
                <Text style={styles.picName}>{item.description}</Text>
                <View style={styles.statsWrap}>
                  <View style={styles.leftSideStats}>
                    <TouchableOpacity>
                      <Image
                        style={styles.statsIcons}
                        source={require("../images/svg/comments-icon.png")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.statsText}>8</Text>
                    <TouchableOpacity>
                      <Image
                        style={styles.statsIcons}
                        source={require("../images/svg/thumbs-up.png")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.statsText}>153</Text>
                  </View>
                  <View style={styles.rightSideStats}>
                    <Image
                      source={require("../images/svg/add-location-icon.png")}
                    />
                    <TouchableOpacity>
                      <Text style={styles.locationLink}>Ukraine</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  profileViewBox: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    width: "100%",
    marginTop: 170,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // alignContent: "flex-end",
    paddingLeft: 16,
    paddingRight: 16,
    // flex: 1,
    justifyContent: "center",
  },
  profileAvatarBox: {
    backgroundColor: "#F6F6F6",
    height: 120,
    width: 120,
    position: "absolute",
    top: -60,
    left: "37%",
    borderRadius: 16,
  },
  profileAvatarBtn: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    position: "absolute",
    bottom: 14,

    right: -12,
    backgroundColor: "#fff",
    transform: [{ rotate: "45deg" }],
  },
  btnRectangle: {
    fontSize: 20,

    color: "#E8E8E8",

    fontWeight: "300",
    position: "absolute",
    top: -3,
    right: "35%",
  },
  btnRectangleRotate: {
    fontSize: 20,
    fontWeight: "300",
    color: "#E8E8E8",

    position: "absolute",
    top: -2,
    right: 7,
    transform: [{ rotate: "90deg" }],
  },
  profileImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    borderRadius: 16,
  },
  profileTitle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 90,
    marginBottom: 30,
  },
  postImage: {
    marginBottom: 10,
  },
  statsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  leftSideStats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  statsIcons: {
    marginRight: 10,
  },
  statsText: {
    marginRight: 30,
  },
  rightSideStats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationLink: {
    borderBottomWidth: 1,
    marginLeft: 10,
  },
  picName: {
    marginBottom: 10,
  },
});
