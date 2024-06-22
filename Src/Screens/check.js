import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default UserProfileView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx29aPEikErgnx9_wA_cP94bQ6MYt0yhluV9VbKexqZw&s' }}
          />

          <Text style={styles.name}>Salah Alstre </Text>
          <Text style={styles.userInfo}> salah.code.zone@gmail.com </Text>
          <Text style={styles.userInfo}>Location{'\n'} tira ,32 </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>App builder{'\n'}Creator of this work : {'\n'}code zone </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>To contact the owner{'\n'} salah.code.zone</Text>
          </View>
        </View>
     
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#778899',
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
})


