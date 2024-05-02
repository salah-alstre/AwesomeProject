
import { StyleSheet,  View , Button,Image, TouchableOpacity , Text , ResponsiveImage} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import React, { useState } from "react";
import TheDropDown from '../compnent/TheDropDown';
import Popover from 'react-native-popover-view';
import DropDownHours  from '../compnent/DropDownHours ';
import DropPayment  from '../compnent/DropPayment';

const DetailsScreen = (props) => {
   
    const item=props.route.params.Details
    console.log(props.route.params.Details.name);

  return (






    

    <View style={styles.Screen}>


      <Image source={{ uri: item.coverPhoto }} style={styles.coverPhoto} />

      <TheDropDown/>

      {/* <TheDropDown data ={hour}/> */}
      
      <DropDownHours/>

      <DropPayment/>
      <View style={styles.log2}>

      <Button  title="Done"onPress={() => props.navigation.navigate('Done')}/>

      </View>
      {/* </ImageBackground> */}

      <Popover
      from={(
        <TouchableOpacity>
      <Image source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqIU43tJGMAY7wm_igrq_d3tcPDHHl2o9Qw&usqp=CAU" }} style={styles.pop}  />
      {/* <Text></Text> */}
        </TouchableOpacity>
      )}>
      <Text> Shop owner number {'\n'}        055-243-1000  </Text>
    </Popover>

    </View>

  )
} 

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: "#4545",
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonst: {
    width: '80%',
    backgroundColor: '#F3D309',
    borderRadius:25,

  }, 
  dayst:{
    width: '80%',
    backgroundColor: '#01FAB3',
    margin:30,
    borderRadius:25,

  // },
  // nameSt:{
  //   backgroundColor: "red",
    
  },
  openst:{
    width: '80%',
    backgroundColor: "#1BD8D2",
    
    
  },
  log2:{
    margin:30
  },
  coverPhoto: {
    width: '85%',
    height: 100,
    resizeMode: 'cover',
    margin:30,
    borderRadius:20,
  },
pop:{
  width: 60,
    height: 60,
    borderRadius: 30,
    // borderWidth: 3,
    // borderColor: 'black',
    marginBottom:20,
    borderRadius: 30,
    backgroundColor:"black",
    resizeMode: 'cover',

},
  });

export default DetailsScreen;
