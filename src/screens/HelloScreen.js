import React from "react"
import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

import CalendarScreen from "./CalendarScreen"
import AddLogScreen from "./AddLogScreen"
import EnregistrerScreen from "./EnregistrerScreen"

const Tab = createBottomTabNavigator()

const HelloScreen = () => {
  return (
    <Tab.Navigator
      style={styles.container}
      screenOptions={{
        tabBarActiveTintColor: "#600093",
        tabBarInactiveTintColor: "grey"
      }}
    >
      <Tab.Screen
        name="Calendario"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="calendar"
              size={25}
              color={focused ? "#600093" : "grey"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Registrar"
        component={AddLogScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="plus-circle"
              size={25}
              color={focused ? "#600093" : "grey"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Historial"
        component={EnregistrerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="history"
              size={25}
              color={focused ? "#600093" : "grey"}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HelloScreen
