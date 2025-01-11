import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import GameScreen from '../src/screens/GameScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Main = () => {
    return ( 
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="GameScreen" component={GameScreen} />
            </Stack.Navigator> 
            )
}

export default Main