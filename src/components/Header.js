import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ goBack, screen }) => {
  return (
    <View style={styles.container}>
      {screen !== "Pantalla 1" && (
        <TouchableOpacity style={styles.btn} onPress={goBack}>
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
      )}

      <Text style={styles.text}>{screen}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#FFEE7A",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
  },
  btn: {
    position: "absolute",
    left: 20,
  },
});
