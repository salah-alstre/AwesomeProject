


import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import { login } from '../res/api/api';





const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    const bodyParams = {
      "pasUser":password ,
      "gmailUser": email

    }
    login(bodyParams).then(res => {
      console.log("login:", res);
      if(res.message!="Invalid Credentials"){
        props.navigation.navigate('Home')
      }else{
        console.log('====================================');
        console.log("err");
        console.log('====================================');
      }
    });
    // 

  };



  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_2t/8324.png' }} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRni4RVt8hrCOZAjvTTd6O9ikXa7D5NDaeSQ&usqp=CAU' }} style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.card}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

          </View>



          <TouchableOpacity onPress={() => props.navigation.navigate('SingUp')}>
            <Text style={styles.SignUpButton}>Register  </Text>
          </TouchableOpacity>




          <TouchableOpacity onPress={() => props.navigation.navigate('ConfirmMail')}>
            <Text style={styles.ForgotButton}>Forgot your password?  </Text>
          </TouchableOpacity>


          {/* <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => showAlert('forgot password')}>
        <Text>Forgot your password?</Text>
      </TouchableOpacity> */}

          <TouchableOpacity onPress={() => handleLogin()}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.facebook]}>
            <Text style={styles.buttonText}>Login with facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.google]}>
            <Text style={styles.buttonText}>Login with Google</Text>
          </TouchableOpacity>
        </View>

   
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B0C4DE'
  },
  loginButton: {
    backgroundColor: '#7B68EE',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  SignUpButton: {
    width: 80,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    color: '#02DFF1'
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#C407EA',
    marginTop: 10,
    padding: 10,
    textAlign: 'center',

  },
  restoreButtonContainer: {
    width: 50,
    marginBottom: 10,

  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 50
  },

  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-around'
  },
  button: {
    width: '48%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  facebook: {
    backgroundColor: '#4267B2'
  },
  google: {
    backgroundColor: '#D62517'
  },
  ForgotButton: {
    width: 300,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    color: 'black'
  },
 
  
});


export default LoginScreen;
