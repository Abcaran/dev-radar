import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Samir!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4c67a1",
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#eaeaea"
  }
});
