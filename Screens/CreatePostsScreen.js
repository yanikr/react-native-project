import React, { useState } from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
  Keyboard,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const takePicture = async () => {
    const photo = await camera.takePictureAsync();
    console.log(photo.uri);
    setImage(photo.uri);
  };
  const clearInput = (val) => {
    setDescription("");
  };
  const descriptionHandler = (text) => setDescription(text);
  const sendPhoto = () => {
    navigation.navigate("Profile", { image, description });
    console.log(navigation);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.picPlaceholder}>
          <Camera style={styles.cameraScreen} ref={setCamera}>
            {image && (
              <View style={styles.takenPhotoWrap}>
                <Image
                  style={{ height: "100%", width: "100%" }}
                  source={{ uri: image }}
                />
              </View>
            )}
            <TouchableOpacity onPress={takePicture} style={styles.addPicPost}>
              <Image source={require("../images/svg/add-photo-icon.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.flipCameraIcon}
                source={require("../images/svg/flip-camera-icon-37769.png")}
              />
            </TouchableOpacity>
          </Camera>
        </View>
        <Text style={styles.createPostTextStyle}>Upload photo</Text>

        <TouchableOpacity style={styles.placeholderWrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <TextInput
              value={description}
              onChangeText={descriptionHandler}
              placeholder="Name your picture"
              placeholderTextColor={"#BDBDBD"}
              style={styles.createPostInput}
            />
          </KeyboardAvoidingView>
        </TouchableOpacity>

        <TouchableOpacity style={styles.placeholderWrapper}>
          <View style={styles.addLocationWrapper}>
            <Image
              style={styles.locationIcon}
              source={require("../images/svg/add-location-icon.png")}
            />
            <TextInput
              // value={location}
              // onChangeText={locationHandler}
              placeholder="Location"
              placeholderTextColor={"#BDBDBD"}
              style={styles.createPostInput}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            sendPhoto(), clearInput();
          }}
          style={styles.submitPost}
        >
          <Text style={styles.publishTextStyle}>Publish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removePostBtn}>
          <Image source={require("../images/svg/trash-bin-icon.png")} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",

    padding: 16,
  },
  picPlaceholder: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    overflow: "hidden",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  cameraScreen: {
    display: "flex",

    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
  },
  addPicPost: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
    zIndex: 76,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 85,
    marginRight: 135,
  },
  createPostTextStyle: {
    fontSize: 16,
    lineHeight: 19,
    alignSelf: "flex-start",
    fontWeight: "400",
    color: "#BDBDBD",
    marginBottom: 50,
  },
  addLocationWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  createPostInput: {
    // color: "#BDBDBD",
    width: "100%",
    fontSize: 16,
    lineHeight: 19,
    alignSelf: "flex-start",
    fontWeight: "400",
    // borderBottomWidth: 1,
    // borderBottomColor: "#BDBDBD",
    width: "100%",
    paddingBottom: 15,
  },
  placeholderWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    width: "100%",
    marginBottom: 30,
  },
  locationIcon: {
    marginRight: 10,
  },
  submitPost: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    borderRadius: 100,
    marginBottom: 50,
  },
  publishTextStyle: {
    textAlign: "center",
    color: "#BDBDBD",
  },
  removePostBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  flipCameraIcon: {
    height: 30,
    width: 30,
    marginBottom: 10,
    marginRight: 20,
  },
  takenPhotoWrap: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 7,
  },
});
