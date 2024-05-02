import { StyleSheet,  View , Button,Image} from 'react-native'
import React, {useState} from 'react'
import {  Provider,    Surface,    ThemeProvider,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";


const TheDropDown = () => {

    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState ("");
    const genderList = [
        {
        label: "Sunday",
        value: "8",
        },
        {
        label: "Monday",
        value: "0",
        },
        {
        label: "Tuesday",
        value: "88",
        },
        {
        label: "Wednesday",
        value: "11",
        },
        {
        label: "Thursday",
        value: "7",
        },
        {
        label: "Friday",
        value: "5",
        },
        {
        label: "Saturday",
        value: "4",
        },
      
    ];


    

  return (
    <Surface style={styles.Continer}>
        {/* <View style={styles.Continer}> */}
          <DropDown 
            label={"day"}
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={gender}
            setValue={setGender}
            list={genderList}
            dropDownStyle={styles.dropDown}// KHIAL
            dropDownContainerHeight={250}
            // dropDownItemStyle={{height:100}}
            
            
          />
          {/* </View> */}
    </Surface>
  )
}

export default TheDropDown

const styles = StyleSheet.create({
  dropDown:{ 
    width: '80%',
    // backgroundColor: '#01FAB3',
    margin:1,
    borderRadius:25,
    
    
  },
  Continer:{
    padding:5,
    width:'80%',
    borderRadius:10,
    // backgroundColor:'#0058F1'
  }
})
