import React from 'react'
import GameScreen from '../src/screens/GameScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/Home';

const Stack = createNativeStackNavigator();
const Main = () => {
    return ( 
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="GameScreen" component={GameScreen} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator> 
            )
}

export default Main