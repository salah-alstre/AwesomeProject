import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import Images from '../assets/Images/Images';
const WaitingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulating a delay before navigating to the phone number screen
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000);
  }, []);



  return (

    <Image
      source={Images.done()} resizeMode='contain' style={styles.Image}>
    </Image>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',

  },

  Image: {
    width: 1000,
    height: 500,
    marginTop: 100,
    alignSelf: 'center',
  },

});

export default WaitingScreen;