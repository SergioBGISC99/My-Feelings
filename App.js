import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "./src/screens/LoginScreen"
import HelloScreen from "./src/screens/HelloScreen"
import RegisterScreen from "./src/screens/RegisterScreen"


const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenido" component={LoginScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
        <Stack.Screen name="Registrarse" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
