import {View, Image, StyleSheet , Text} from 'react-native';
import React from 'react'
import SalahAppProvider from './store/SalahAppProvider';
import MainNavigation from './routes/nav';
import { Provider, ThemeProvider } from 'react-native-paper';
import {PopupProvider} from '-nareacttive-popup';



const App = () => {

  return (
    // <PopupProvider></PopupProvider>

    <Provider >
    <ThemeProvider >
  <View style={styles.container} >
    <SalahAppProvider>
      <MainNavigation/>
    </SalahAppProvider>
  </View>
  </ThemeProvider>
  </Provider>
  
  )
}


const styles = StyleSheet.create({
  container: {
   flex:1
  },
  names: {
    color: "red",
    fontSize: 15,
  },
  scroll: {
    // marginTop:20
  }
});

export default App;





// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');

//   const handleLogin = () => {
//     // Handle the login logic here, e.g., API calls, authentication checks, etc.
//     console.log('Logged in with email:', email, 'and name:', name);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={text => setEmail(text)}
//         value={email}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         onChangeText={text => setName(text)}
//         value={name}
//       />
//       <Button title="Log In" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default LoginScreen;
