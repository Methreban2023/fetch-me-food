import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const SignUp = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  console.log(userInfo);
  return (
    <View style={styles.container}>
      <Pressable onPress={pickImage}>
        <View style={styles.avatar_image}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100 }}
            />
          )}
        </View>
      </Pressable>
      <Text style={styles.text}>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, firstName: value });
        }}
        placeholder="First Name"
      />

      <Text style={styles.text}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, lastName: value });
        }}
        placeholder="Last Name"
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, email: value });
        }}
        placeholder="email"
      />

      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, password: value });
        }}
        placeholder="password"
      />

      <Button title="Sign Up" onPress={() => {}} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  link_text: {
    color: "blue",
  },
  avatar_image: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
    borderRadius: 100,
    overflow: "hidden",
  },
});
