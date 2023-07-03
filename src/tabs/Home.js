import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../assets/avatar.png')}
            style={{width: 35, height: 35, borderRadius: 20}}
          />
        </TouchableOpacity>
        <View style={styles.inputFiled}>
          <TextInput
            placeholder="Search....."
            style={{padding: 6}}
            placeholderTextColor={'black'}
          />
        </View>
        <TouchableOpacity>
          <Icon.MessageSquare width={23} color={'#666666'} />
        </TouchableOpacity>
      </View>
      <View style={styles.editBox}>
        <Icon.Edit3 fill="#666666" size={24} />
        <Text style={{marginLeft: 10, fontSize: 16, color: 'black'}}>
          Start a Post
        </Text>
      </View>
      <View style={styles.postType}>
        <TouchableOpacity style={styles.postTabs}>
          <Image
            source={require('../assets/postImage.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={{color: 'black', fontSize: 12}}>Photo / Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postTabs}>
          <Image
            source={require('../assets/temp.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={{color: 'black', fontSize: 12}}>Template</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postTabs}>
          <Image
            source={require('../assets/event.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={{color: 'black', fontSize: 12}}>Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    elevation: 3,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputFiled: {
    backgroundColor: '#EBEBEB',
    borderRadius: 5,
    width: '70%',
    heightL: '60%',
  },
  editBox: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8',
    borderTopColor: '#D8D8D8',
    borderTopWidth: 0.5,
    paddingLeft: 20,
  },
  postType: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8',
    width: '100%',
    height: 50,
  },
  postTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
});
