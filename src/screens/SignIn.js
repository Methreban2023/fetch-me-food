import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";
import { colors } from "../utils/colors/colors";
// import { RoundedButton } from "../componenats/designs/RoundedButton";
import ROUTES from "../navigation";
const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../media/black-logo.png")} // Replace with your image path
        style={styles.image}
      />
      <View style={styles.entery}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} placeholder="email" />
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input} placeholder="password" />
        <Button title="Sign In" onPress={() => {}} />
      </View>
      <View style={styles.link_position}>
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
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
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
    color: colors.orange,
    fontSize: 16,
    fontWeight: "bold",
  },
  link_text: {
    color: "#1F7194",
  },
  link_position: {
    flex: 0.18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    flex: 0.5,
  },
  entery: {
    flex: 0.18,
  },
});
