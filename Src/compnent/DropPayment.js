import { StyleSheet,  View , Button,Image} from 'react-native'
import React, {useState} from 'react'
import {  Provider,    Surface,    ThemeProvider,
} from "react-native-paper";
import DropDown  from "react-native-paper-dropdown";


const DropPayment  = () => {

    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState ("");
    const genderList = [
        {
        label: "cash",
        value: "1",
        },
        {
        label: "Card",
        value: "2",
        }
    ];


    

  return (
    <Surface style={styles.Continer}>
        {/* <View style={styles.Continer}> */}
          <DropDown 
            label={"payment method"}
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={gender}
            setValue={setGender}
            list={genderList}
            dropDownStyle={styles.dropDown}// KHIAL
            dropDownContainerHeight={90}
            // dropDownItemStyle={{height:100}}
            
            
          />
          {/* </View> */}
    </Surface>
  )
}

export default DropPayment 

const styles = StyleSheet.create({
  dropDown:{ 
    width: '80%',
    // backgroundColor: '#01FAB3',
    margin:1,
    borderRadius:25,
    
  },
  Continer:{
    padding:5,
    width:'50%',
    borderRadius:10,
    marginTop:15,
    // backgroundColor:'#0058F1'
  }
})
