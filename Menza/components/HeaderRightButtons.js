import {View} from 'react-native';
import React from 'react';
import {signOut} from '../functions/signOut';
import {IconButton} from 'react-native-paper';

function HeaderRightButtons({navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <IconButton icon="user" onPress={() => navigation.navigate('Profile')} />
      <IconButton icon="logout" onPress={signOut} />
    </View>
  );
}

export {HeaderRightButtons};
