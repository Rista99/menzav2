import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {Button, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import Loader from '../components/Loader';
import {UserContext} from '../App';

const ProfileScreen = ({route, navigation}) => {
  const {colors} = useTheme();
  const userProfile = useContext(UserContext);

  return (
    <>
      {userProfile ? (
        <>
          <ScrollView
            style={{
              backgroundColor: colors.surface,
              margin: 10,
              borderRadius: 10,
            }}>
            <View
              style={{alignItems: 'center', width: '100%', marginTop: '10%'}}>
              <Icon
                name="user-circle-o"
                size={100}
                style={{color: colors.onSurface}}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                width: '100%',
                marginTop: '5%',
                borderBottomColor: '#D0D0D0',
                borderBottomWidth: 1,
                paddingBottom: '10%',
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 20,
                  color: colors.onSurface,
                }}>{`${userProfile.ime} ${userProfile.prezime}`}</Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                Broj Indeksa
              </Text>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                {userProfile.brIndeksa}
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                Univerzitet:
              </Text>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                {userProfile.univerzitet}
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                Fakultet:
              </Text>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                {userProfile.fakultet}
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                Godina studija:
              </Text>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                {userProfile.godinaStudija}.
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                Email:
              </Text>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                {userProfile.email}
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                Način finansiranja:
              </Text>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                {userProfile.nacinFinansiranja}
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                Žiro račun:
              </Text>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                840-1710666-12
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                Poziv na broj:
              </Text>
              <Text style={[styles.textStyle, {color: colors.onSurface}]}>
                (97) {userProfile.pozivNaBroj}
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              style={{
                width: '50%',
                borderRadius: 3,
              }}
              onPress={() => navigation.navigate('BuyToken')}>
              Kupi bonove
            </Button>
          </View>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 15,
    flexWrap: 'wrap',
  },
  textStyle: {
    fontSize: 17,
    maxWidth: '70%',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: '-1%',
  },
});
