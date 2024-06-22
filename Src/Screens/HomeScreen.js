
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Button} from 'react-native';


const ProfileCards = (props) => {


  
  const navigation =useNavigation()
  const items = [ 

    
    {
      avatar: "https://www.shutterstock.com/shutterstock/photos/1039907221/display_1500/stock-photo-bearded-man-bearded-male-portrait-of-stylish-man-beard-barber-scissors-and-straight-razor-1039907221.jpg",
      coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxK_J4xpY6-38mHuqAp_W9gjlqAmF1vYY8A&usqp=CAU",
      name : "salah"
    },
    {
      avatar: "https://gents.co.nz/cdn/shop/files/WM-Gents-02198_14f5d7aa-5fa8-4768-a5dd-06189ef8953d_1500x.jpg?v=1636343443",
      coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMTjEVXVfxfhccAuoZh72FDi_wjkIzIHmzQ&usqp=CAU",
      name: "momen"
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAP7TkA1tWFQpKW1jAJSsS_NRLI5pf_rbHg&usqp=CAU",
      coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmlfUMUsU4CWCtJFXqwoBAlRLrU1CbUnrmtg2JKqQ3Si_nCZnJ4zivANONFKsEi4xx9Y&usqp=CAU",
      name: "error"
    },
    {
      avatar: "https://marketplace.canva.com/EAFRjQYrOoU/1/0/1600w/canva-black-and-white-modern-barber-shop-logo-wJRJ22uj-3A.jpg",
      coverPhoto: "https://cdn3.vectorstock.com/i/1000x1000/88/57/barbershop-logo-vintage-classic-style-salon-vector-35028857.jpg",
      name: "Saad"
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXZEaOuRW6UJ9pHMobS-WK6LexP8OB7VQ6g&usqp=CAU",
      coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5bBlgQxVheRP8PZPp7_4W9caXf8UPo8bhw&usqp=CAU",
      name: "almal7e"
    },
    {
      avatar: "https://lovelystickers.com/cdn/shop/products/FPB132-BarberShop_1200x1200.jpg?v=1588855409",
      coverPhoto: "https://t.pimg.jp/072/043/471/1/72043471.jpg",
      name: "malek"
    }
    
  ];
  
  
  const renderItem = ({item}) => {
    return(

    <TouchableOpacity style={styles.itemContainer} 
    onPress={() => navigation.navigate('Details',{ Details: item })}
    >
     
      <Image source={{ uri: item.coverPhoto }} style={styles.coverPhoto} />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      
    </TouchableOpacity>

    )
  }

  return (
    
    <View style = {styles.yarn}>

    <TouchableOpacity style={styles.npm} 
        onPress={() => navigation.navigate('check')}
        >
          <Image source={{ uri: "https://img.lovepik.com/free-png/20210918/lovepik-character-png-image_400195163_wh1200.png"}} style={styles.avatar} />
      
    </TouchableOpacity>
 
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
     
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginBottom:20,
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal:20,
    backgroundColor: '#7C3357',
    borderRadius:15,
    paddingBottom:50,

  },
  coverPhoto: {
    width: '100%',
    height: 60,
    resizeMode: 'cover',
    borderRadius:10,
    
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -35,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'black',
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',

  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#C407EA',
    marginTop: 10,
    padding: 10,
  },
  yarn: {
    flex:1,
    padding:10,
  },
  npm:{
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'black',
    marginBottom:20,
    borderRadius: 30,

  },
  support:{
    borderRadius: 30,
    borderColor: 'red',
    marginBottom:10,
    borderRadius: 30,
    alignItems: 'center',
  }
});


export default ProfileCards;
