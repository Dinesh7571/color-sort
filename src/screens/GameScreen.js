import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenBackground from '../components/ScreenBackground'; 
import TubeGame from '../components/TubeGame';
import CustomButton from '../components/CustomButton'; // Import the CustomButton

const GameScreen = () => {
  const handlePlayPress = () => {
    console.log("Play button pressed");
    // Add your logic here (e.g., navigation or starting the game)
  };

  return (
    <ScreenBackground backgroundImage={require('../images/bg.jpg')}>
   
      <TubeGame />
     
    </ScreenBackground>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  playButton: {
    
  },
 
 
});
