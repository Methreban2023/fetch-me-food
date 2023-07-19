import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SignUp from "./SignUp";
import { Button } from "react-native";
import ROUTES from "../navigation";
const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} placeholder="email" />

      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.input} placeholder="password" />

      <Button title="Sign In" onPress={() => {}} />

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.AUTHROUTES.FORGOT)}
      >
        <Text style={styles.link_text}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.AUTHROUTES.SIGNOUT)}
      >
        <Text style={styles.link_text}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

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
});
