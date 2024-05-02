import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import Images from '../assets/Images/Images';
// import ScreenNames from '../ScreenNames';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

const WaitingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulating a delay before navigating to the phone number screen
    setTimeout(() => {
      navigation.replace('ScreenTwo');
    }, 3000);
  }, []);



  return (

    <Image
      source={Images.salon4()} resizeMode='contain' style={styles.Image}>
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
    width: 400,
    height: 300,
    marginTop: 150,
    alignSelf: 'center',
    // backgroundColor : 'red',

    // resizeMode: 'center',
    // alignItems: 'center'
  },

});

export default WaitingScreen;