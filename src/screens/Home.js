import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <View style={{ padding: 16, backgroundColor: "green" }}>
        <Text>search</Text>
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        <Text>Home</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
