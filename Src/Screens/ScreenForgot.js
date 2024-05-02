import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const TwoFactorAuthView = (props) => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/009/209/212/small/neon-glowing-profile-icon-3d-illustration-vector.jpg'}}
        />
      </View>
      <Text style={styles.title}>Enter the code sent to your email</Text>
      <Text style={styles.description}>
     {" Complete the next step to change your password \n Enter the 6-digit code "}     </Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Enter Code"
          keyboardType="number-pad"
          value={code}
          onChangeText={setCode}
          maxLength={6}
        />
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Reset')}>
          <Text style={styles.buttonText}>Send</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoContainer: {
    overflow: 'hidden',
    marginBottom:20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius:50,
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#00CED1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#00CED1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TwoFactorAuthView;