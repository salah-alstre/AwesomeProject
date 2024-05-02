import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ChangePassword = (props) => {

  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  const handleSubmit = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyw4PtOZHhzipew0EkEWiHafFeg4h0silCA&usqp=CAU'}}
        />
      </View>
      <View style={styles.form}>
        
        <Text style={styles.label}>Enter your email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Forgot')}>
          <Text style={styles.buttonText}> Send</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#7BCFCD',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
    marginBottom:5
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign:'center',
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
});

export default ChangePassword;
