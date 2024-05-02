import React from 'react';
import { Button, Text, View, Image,  TouchableOpacity, Icon } from 'react-native'
import Images from '../assets/Images/Images';
import DetailsScreen from './DetailsScreen';


const LastScreen = (props) => {
  return (
    <View  >

    
    
        <View>
          
          <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
            <Image
              style={{
                resizeMode: 'cover',
                height: 50,
                width: '10%',
                margin:10,

              }}
              source={Images.check()}
            />
          </TouchableOpacity>
          
</View>

</View>
     );
     };

     
export default LastScreen;
