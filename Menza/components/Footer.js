import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {useTheme} from 'react-native-paper';
import {UserContext} from '../App';

const Footer = () => {
  const {colors} = useTheme();

  const user = useContext(UserContext);
  return (
    <View style={[styles.footer, {backgroundColor: colors.background}]}>
      <View style={{justifyContent: 'center'}}>
        <Text style={[styles.footerButton, {color: colors.placeholder}]}>
          Doručak: {user.brojDoruckova}{' '}
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={[styles.footerButton, {color: colors.placeholder}]}>
          Ručak: {user.brojRuckova}
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={[styles.footerButton, {color: colors.placeholder}]}>
          Večera: {user.brojVecera}
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerButton: {
    fontSize: 16,
    fontWeight: '500',
  },
});
