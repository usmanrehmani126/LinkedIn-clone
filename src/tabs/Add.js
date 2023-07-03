import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import * as Icons from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
const Add = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Icons.XMarkIcon fill="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Start a Post</Text>
        <TouchableOpacity style={styles.postBtn}>
       <Text style={{color:"black"}}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingLeft:20,
    paddingRight:20
  },
  title:{
    color:"gray",
    fontSize:18
  },
  postBtn:{
    width:60,
    height:35,
    backgroundColor:"#B1B1B1",
    borderRadius:20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  }
});
