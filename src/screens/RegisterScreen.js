import React, { useState } from "react"
import { StyleSheet, Text, View} from "react-native"

import TextInput from '../components/TextInput';
import Button from '../components/Button';

const RegisterScreen = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmation] = useState("")
  const [email, setEmail] = useState("")
  const [userLastname, setLastName] = useState("")

  const handleRegister = () => {
    console.log(
      `Username: ${username}, 
      UserLastName: ${userLastname},
      Email: ${email}, 
      Password: ${password},
      Password: ${confirmPassword}`
    )
    // aquí puedes agregar la lógica para enviar los datos del usuario al servidor
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Es rápido y fácil.</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={userLastname}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirma tu contraseña"
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={(text) => setConfirmation(text)}
      />
      <Button title="Registrarte" onPress={handleRegister} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8978d6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "normal",
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10
  }
})

export default RegisterScreen
