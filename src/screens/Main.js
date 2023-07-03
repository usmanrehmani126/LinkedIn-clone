import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as Icon from 'react-native-feather';
import * as Icons from 'react-native-heroicons/solid';
import Home from '../tabs/Home';
import Connections from '../tabs/Connections';
import Notifications from '../tabs/Notifications';
import Job from '../tabs/Job';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      {selected == 0 ? (
        <Home />
      ) : selected == 1 ? (
        <Connections />
      ) : selected == 3 ? (
        <Notifications />
      ) : (
        <Job />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selected == 0 ? 2 : 0,
            },
          ]}
          onPress={() => setSelected(0)}>
          {selected == 0 ? (
            <Icons.HomeIcon fill="black" size={24} />
          ) : (
            <Icon.Home stroke="gray" fill="#fff" width={24} height={24} />
          )}

          {/* <Icons.HomeIcon  fill="black" size={24} /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selected == 1 ? 2 : 0,
            },
          ]}
          onPress={() => setSelected(1)}>
          {/* <Icons.UsersIcon fill="black" size={24} /> */}

          {selected == 1 ? (
            <Icons.UsersIcon fill="black" size={24} />
          ) : (
            <Icon.Users stroke="gray" fill="#fff" width={24} height={24} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selected == 2 ? 2 : 0,
            },
          ]}
          onPress={() => navigation.navigate('Add')}>
          {selected == 2 ? (
            <Icons.PlusCircleIcon fill="black" size={24} />
          ) : (
            <Icon.PlusCircle stroke="gray" fill="#fff" width={24} height={24} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selected == 3 ? 2 : 0,
            },
          ]}
          onPress={() => setSelected(3)}>
          {selected == 3 ? (
            <Icons.BellIcon fill="black" size={24} />
          ) : (
            <Icon.Bell stroke="gray" fill="#fff" width={24} height={24} />
          )}
          {/* */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selected == 4 ? 2 : 0,
            },
          ]}
          onPress={() => setSelected(4)}>
          {selected == 4 ? (
            <Icons.BriefcaseIcon fill="black" size={24} />
          ) : (
            <Icon.Briefcase stroke="gray" fill="#fff" width={24} height={24} />
          )}
          {/* <Icons.Briefcase fill="black" size={24} />  */}
        </TouchableOpacity>
      </View>
      {/* <Icon.Menu stroke="black" fill="#fff" width={24} height={24} /> */}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      x: 1,
      y: 1,
    },
    height: 60,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomTab: {
    width: '15%',
    height: '98%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
