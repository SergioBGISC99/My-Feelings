import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EnregisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hola desde el historial</Text>
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

export default EnregisterScreen;