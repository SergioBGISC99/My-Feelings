import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hola desde el calendario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalendarScreen;
