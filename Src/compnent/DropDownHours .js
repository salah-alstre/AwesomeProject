import { StyleSheet,  View , Button,Image} from 'react-native'
import React, {useState} from 'react'
import {  Provider,    Surface,    ThemeProvider,
} from "react-native-paper";
import DropDown  from "react-native-paper-dropdown";


const DropDownHours  = () => {

    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState ("");
    const genderList = [
        {
        label: "1:00",
        value: "8",
        },
        {
        label: "1:30",
        value: "0",
        },
        {
        label: "2:00",
        value: "88",
        },
        {
        label: "2:30",
        value: "11",
        },
        {
        label: "3:00",
        value: "7",
        },
        {
        label: "3:30",
        value: "5",
        },
        {
        label: "4:00",
        value: "4",
        },
        {
        label: "4:30",
        value: "33",
        },
        {
        label: "5:00",
        value: "44",
        },
        {
        label: "5:30",
        value: "55",
        },
        {
        label: "6:00",
        value: "66",
        },
        {
        label: "6:30",
        value: "77",
        },
        {
        label: "7:00",
        value: "100",
        },
        {
        label: "7:30",
        value: "200",
        },
        {
        label: "8:00",
        value: "300",
        },
        {
        label: "8:30",
        value: "400",
        },
        {
        label: "9:00",
        value: "500",
        },
    ];


    

  return (
    <Surface style={styles.Continer}>
        {/* <View style={styles.Continer}> */}
          <DropDown 
            label={"Hours"}
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

export default DropDownHours 

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
    marginTop:15,
    // backgroundColor:'#0058F1'
  }
})
