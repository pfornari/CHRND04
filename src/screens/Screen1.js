import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Screen1 = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleScreen2 = () => {
    navigation.navigate("Pantalla 2", { nombre, apellido });
    setNombre("");
    setApellido("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
      <TouchableOpacity style={styles.containerBtn} onPress={handleScreen2}>
        <Text>Ir a Pantalla 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 4,
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
