import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Popover from 'react-native-popover-view/dist/Popover';

const CreditCardInfoScreen = () => {

  const[cards, setCards]  = useState([
    { id: 1, number: '**** **** **** 4685', holder:'Salah alstre', expiration:'12/26', logo: 'https://img.icons8.com/color/70/000000/visa.png' },
    { id: 2, number: '**** **** **** 7301', holder:'Salah alstre', expiration:'06/28',logo: 'https://img.icons8.com/color/70/000000/mastercard.png' },
    { id: 3, number: 'Apple Pay', holder:'Salah alstre', expiration:'      ∞', logo:'https://img.icons8.com/color/70/000000/apple-pay.png' },
    { id: 4, number: 'cash', holder:'To pay in cash, choose this card”.', expiration:'      ∞', logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFW4vhzzg-YFU-gdo-ZlrhePPrW3GfJ6edetkPrMlmfg&s' },

  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card Info</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.carouselContainer}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            <Image source={{ uri: card.logo }} style={styles.logo} />
            <Text style={styles.cardNumber}>{card.number}</Text>
            <View style={styles.cardInfoContainer}>
              <View style={styles.cardInfoItem}>
                <Text style={styles.cardInfoLabel}>Card Holder</Text>
                <Text style={styles.cardInfoValue}>{card.holder}</Text>
              </View>
              <View style={styles.cardInfoItem}>
                <Text style={styles.cardInfoLabel}>Expiration</Text>
                <Text style={styles.cardInfoValue}>{card.expiration}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.buttonText}>Make a Payment</Text>
      </TouchableOpacity> */}
      <Popover
      from={(
        <TouchableOpacity style={styles.paymentButton}>
      <Image source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqIU43tJGMAY7wm_igrq_d3tcPDHHl2o9Qw&usqp=CAU" }} style={styles.pop}  />
      <Text>Confirm payment</Text>
        </TouchableOpacity>
      )}>
      <Text style={styles.buttonText} > Payment has been completed successfully, {'\n'}          you will receive the invoice via email  </Text>
    </Popover>
    
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#1640DF',
  },
  cardContainer: {
    marginHorizontal:10,
    width: 300,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 6,
    borderBottomColor: '#ccc',
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 4,
    marginBottom: 10,
    color:'black',
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoItem: {
    flex: 1,
  },
  cardInfoLabel: {
    fontSize: 12,
    color: 'gray',
  },
  cardInfoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'red',
  },
  carouselContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 30,
  },
  paymentButton: {
    backgroundColor: '#00008B',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 60,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CreditCardInfoScreen;
