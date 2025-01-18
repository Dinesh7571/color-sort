import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenBackground from '../components/ScreenBackground'
import { useNavigation } from 'expo-router'

const Home = () => {
  const navigation =useNavigation()
  return (
    <ScreenBackground backgroundImage={require('../images/bg.jpg')}>
      <TouchableOpacity onPress={()=>navigation.navigate('GameScreen')}>
<Text>Game Screen</Text>
      </TouchableOpacity>
    </ScreenBackground>
  )
}

export default Home

const styles = StyleSheet.create({})