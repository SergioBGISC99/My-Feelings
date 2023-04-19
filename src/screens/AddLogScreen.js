import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AddLogScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hola desde el registro de emociones</Text>
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

export default AddLogScreen;