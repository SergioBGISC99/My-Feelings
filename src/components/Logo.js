import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../../assets/calendario.png')}/>
            <Text style={styles.logoText}>My Feelings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logoImage: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    logoText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  })

export default Logo