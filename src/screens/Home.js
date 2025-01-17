import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenBackground from '../components/ScreenBackground'

const Home = () => {
  return (
    <ScreenBackground backgroundImage={require('../images/bg.jpg')}>
      <Text>Home</Text>
    </ScreenBackground>
  )
}

export default Home

const styles = StyleSheet.create({})