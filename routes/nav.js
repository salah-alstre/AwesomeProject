import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Src/Screens/HomeScreen';
import DetailsScreen from '../Src/Screens/DetailsScreen';
import ScreenTwo from '../Src/Screens/ScreenTwo';
import lastScreen from '../Src/Screens/lastScreen';
import ScreenDone from '../Src/Screens/ScreenDone';
import SignUp from '../Src/Screens/SignUp';
import ScreenForgot from '../Src/Screens/ScreenForgot';
import ScreenReset from '../Src/Screens/ScreenReset';
import Confirm  from '../Src/Screens/Confirm';
import ConfirmMail  from '../Src/Screens/ConfirmMail';
import WaitingScreen  from '../Src/Screens/WaitingScreen';
import Check  from '../Src/Screens/check';
import WaitingPayment  from '../Src/Screens/WaitingPayment';



const MainNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="WaitingScreen">
         {/* <Stack.Screen name="ScreenTwo" component={ScreenTwo} /> */}
         {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
         {/* <Stack.Screen name="Details" component={DetailsScreen}/> */}
         {/* <Stack.Screen name="last" component={lastScreen} /> */}
         {/* <Stack.Screen name="Done" component={ScreenDone} /> */}
         {/* <Stack.Screen name="SingUp" component={SignUp} /> */}

         {/* <Stack.Navigator initialRouteName={ScreenNames.WaitingScreen}></Stack.Navigator> */}
         <Stack.Screen options={{headerShown: false}} name="SingUp" component={SignUp} />
         <Stack.Screen options={{headerShown: false}} name="Done" component={ScreenDone} />
         <Stack.Screen options={{headerShown: false}} name="last" component={lastScreen} />
         <Stack.Screen options={{headerShown: false}} name="Details" component={DetailsScreen} />
         <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
         <Stack.Screen options={{headerShown: false}} name="ScreenTwo" component={ScreenTwo} />
         <Stack.Screen options={{headerShown: false}} name="Forgot" component={ScreenForgot} />
         <Stack.Screen options={{headerShown: false}} name="Reset" component={ScreenReset} />
         <Stack.Screen options={{headerShown: false}} name="Confirm" component={Confirm} />
         <Stack.Screen options={{headerShown: false}} name="ConfirmMail" component={ConfirmMail} />
         <Stack.Screen options={{headerShown: false}} name="WaitingScreen" component={WaitingScreen} />
         <Stack.Screen options={{headerShown: false}} name="check" component={Check} />
         <Stack.Screen options={{headerShown: false}} name="WaitingPayment" component={WaitingPayment} />



       </Stack.Navigator>
     </NavigationContainer>
    )
}

export default MainNavigation;

// const styles = StyleSheet.create({})