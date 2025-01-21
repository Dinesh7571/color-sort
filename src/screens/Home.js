import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenBackground from '../components/ScreenBackground'
import { useNavigation } from 'expo-router'

const Home = () => {
  const navigation = useNavigation()
  return (
    <ScreenBackground backgroundImage={require('../images/bg.jpg')}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('GameScreen')}>
          <Image source={require('../images/play.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100, // Set appropriate width
    height: 100, // Set appropriate height
    resizeMode: 'contain',
  },
})
