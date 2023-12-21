import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Screen2 = ({ navigation, route }) => {
  const { nombre, apellido } = route.params;

  const handleScreen3 = () => {
    navigation.navigate("Pantalla 3", { nombre, apellido });
  };

  return (
    <View style={styles.container}>
      <Text>Se esta en pantalla 2</Text>
      <Text>
        Y soy {nombre} {apellido}
      </Text>
      <TouchableOpacity style={styles.containerBtn} onPress={handleScreen3}>
        <Text>Ir a Pantalla 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerBtn: {
    backgroundColor: "#87CEEB",
    borderWidth: 1,
    width: "80%",
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
});
