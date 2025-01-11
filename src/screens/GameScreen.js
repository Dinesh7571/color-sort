import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text ,StatusBar, Image, TouchableOpacity} from 'react-native';
import {  } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
const GameScreen = () => {
    const [loaded, error] = useFonts({
        'IGeomanist-Medium': require('../fonts/Geomanist-Medium.ttf'),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }
    return (
        <View style={styles.container}>
            <StatusBar translucent barStyle="light-content" backgroundColor='#46261c'/>
            <ImageBackground
                style={styles.background}
                source={require('../images/bg.jpg')}
            >
                
            <TouchableOpacity activeOpacity={0.7} style={styles.btn} >
                <Image style={styles.play} source={require('../images/circularbtn.png')}/>
                <Text style={styles.btntext}>Play</Text>
            </TouchableOpacity>

            </ImageBackground>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    play:{
        height:90,
        width:90
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btntext:{
        position:'absolute',
        color:'rgba(255, 255, 255, 0.76)',
        fontSize:20,
       fontWeight:'900',
        fontFamily:'Geomanist-Medium'
        //Geomanist-Medium.ttf
    }
});
