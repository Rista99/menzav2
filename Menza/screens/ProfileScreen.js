import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../components/Loader';

const ProfileScreen = ({route}) => {
  const {colors} = useTheme();
  const {userProfile} = route.params;

  return (
    <>
      {userProfile ? (
        <ScrollView
          style={{
            backgroundColor: colors.surface,
            margin: 10,
            borderRadius: 10,
          }}>
          <View style={{alignItems: 'center', width: '100%', marginTop: '10%'}}>
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
        </ScrollView>
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
});
