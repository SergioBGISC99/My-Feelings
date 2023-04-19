import React from "react"
import { StyleSheet, TextInput as RNTextInput } from "react-native"

const TextInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    color: '#000',
    fontSize: 16,
    paddingLeft: 10,
    height: 50,
    width: 200,
    margin: 10,
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37

  }
})

export default TextInput
