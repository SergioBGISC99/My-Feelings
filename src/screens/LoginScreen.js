import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`)
    navigation.navigate('Hello')
  };

  const handleSignIn = () => {
    navigation.navigate('Registrarse')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo/>
      </View>
      <View style={styles.formContainer}>
        <TextInput
        placeholder='Correo'
        value={username}
        onChangeText={text => setUsername(text)}/>
        <TextInput
        placeholder='Contraseña'
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}/>
        <Button title='Iniciar Sesión' onPress={handleLogin}/>
        <Button title='Registrarse' onPress={handleSignIn}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8978d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;