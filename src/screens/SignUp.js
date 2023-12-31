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
import { useMutation } from "@tanstack/react-query";
import signUp from "../apis/auth/auth";
import { colors } from "../utils/colors/colors";
const SignUp = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { mutate: signUpFn, error } = useMutation({
    mutationFn: () => signUp({ ...userInfo, image }),
    onSuccess: (data) => {
      console.log(data);
    },
  });

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

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!regex.test(password)) {
      return setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
    }

    return setPasswordError("");
  };
  const passwordChangeHandler = (value) => {
    setUserInfo({ ...userInfo, password: value });
    setPassword(value);
    setPasswordError(validatePassword(value));
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
        secureTextEntry
        value={password}
        onChangeText={passwordChangeHandler}
        placeholder="password"
      />
      {/* {passwordError !== "" && (
        <Text style={{ color: "red" }}>{passwordError}</Text>
      )} */}
      <Button
        title="Sign Up"
        onPress={() => {
          signUpFn;
        }}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  input: {
    height: 40,
    borderColor: colors.orange,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: colors.white,
    width: 300,
  },
  text: {
    color: "white",
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
