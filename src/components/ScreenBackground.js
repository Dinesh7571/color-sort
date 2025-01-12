import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const ScreenBackground = ({ 
  children, 
  backgroundImage, 
  barStyle = 'light-content', 
  statusBarColor = '#46261c', 
  fontConfig = { 
    'IGeomanist-Medium': require('../fonts/Geomanist-Medium.ttf'), 
    // Add more fonts as needed
  } 
}) => {
  const [fontsLoaded, fontError] = useFonts(fontConfig);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null; // Wait for fonts to load
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle={barStyle} backgroundColor={statusBarColor} />
      <ImageBackground style={styles.background} source={backgroundImage}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default ScreenBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
