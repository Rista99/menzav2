import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, Button, useTheme, IconButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';

const BuyTokenScreen = ({user}) => {
  const [dorucak, setDorucak] = useState(0);
  const [rucak, setRucak] = useState(0);
  const [vecera, setVecera] = useState(0);

  const {colors} = useTheme();

  const dorucakMinus = () => {
    if (dorucak > 0) {
      setDorucak(dorucak - 1);
    }
  };

  const dorucakPlus = () => {
    setDorucak(dorucak + 1);
  };

  const rucakMinus = () => {
    if (rucak > 0) {
      setRucak(rucak - 1);
    }
  };

  const rucakPlus = () => {
    setRucak(rucak + 1);
  };

  const veceraMinus = () => {
    if (vecera > 0) {
      setVecera(vecera - 1);
    }
  };

  const veceraPlus = () => {
    setVecera(vecera + 1);
  };

  const kupiBonove = async () => {
    try {
      switch (user.nacinFinansiranja) {
        case 'Budžet': {
          if (dorucak * 40 + rucak * 72 + vecera * 59 < user.stanjeRacuna) {
            await firestore()
              .collection('users')
              .doc(auth().currentUser.uid)
              .update({
                brojDoruckova: user.brojDoruckova + dorucak,
                brojRuckova: user.brojRuckova + rucak,
                brojVecera: user.brojVecera + vecera,
                stanjeRacuna:
                  user.stanjeRacuna - (dorucak * 40 + rucak * 72 + vecera * 59),
              });
          } else {
            alert('Nemate dovoljno sredstava za kupovinu!');
          }
          break;
        }

        case 'Samofinansiranje': {
          if (dorucak * 105 + rucak * 225 + vecera * 185 < user.stanjeRacuna) {
            await firestore()
              .collection('users')
              .doc(auth().currentUser.uid)
              .update({
                brojDoruckova: user.brojDoruckova + dorucak,
                brojRuckova: user.brojRuckova + rucak,
                brojVecera: user.brojVecera + vecera,
                stanjeRacuna:
                  user.stanjeRacuna -
                  (dorucak * 105 + rucak * 225 + vecera * 185),
              });
          } else {
            alert('Nemate dovoljno sredstava za kupovinu!');
          }
          break;
        }
      }
    } catch (e) {
      console.error(e);
      alert('Neuspešno!');
    } finally {
      setDorucak(0);
      setRucak(0);
      setVecera(0);
    }
  };

  return (
    <View style={{margin: 10}}>
      <Text style={{textAlign: 'center', color: colors.primary, fontSize: 20}}>
        Doručak
      </Text>
      <View style={styles.formRow}>
        <IconButton
          icon="minus"
          color={colors.primary}
          style={[
            {
              backgroundColor: colors.surface,
            },
            styles.button,
          ]}
          onPress={dorucakMinus}></IconButton>
        <TextInput
          style={styles.textInput}
          value={dorucak.toString()}
          disabled></TextInput>
        <IconButton
          icon="plus"
          color={colors.primary}
          style={[
            {
              backgroundColor: colors.surface,
            },
            styles.button,
          ]}
          onPress={dorucakPlus}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>+</Text>
        </IconButton>
      </View>
      <Text style={{textAlign: 'center', color: colors.primary, fontSize: 20}}>
        Ručak
      </Text>
      <View style={styles.formRow}>
        <IconButton
          icon="minus"
          color={colors.primary}
          style={[
            {
              backgroundColor: colors.surface,
            },
            styles.button,
          ]}
          onPress={rucakMinus}>
          <Text>-</Text>
        </IconButton>
        <TextInput
          style={styles.textInput}
          value={rucak.toString()}
          disabled></TextInput>
        <IconButton
          icon="plus"
          color={colors.primary}
          style={[
            {
              backgroundColor: colors.surface,
            },
            styles.button,
          ]}
          onPress={rucakPlus}>
          <Text>+</Text>
        </IconButton>
      </View>
      <Text style={{textAlign: 'center', color: colors.primary, fontSize: 20}}>
        Večera
      </Text>
      <View style={styles.formRow}>
        <IconButton
          icon="minus"
          color={colors.primary}
          style={[
            {
              backgroundColor: colors.surface,
            },
            styles.button,
          ]}
          onPress={veceraMinus}>
          <Text>-</Text>
        </IconButton>
        <TextInput
          style={styles.textInput}
          value={vecera.toString()}
          disabled></TextInput>
        <IconButton
          icon="plus"
          color={colors.primary}
          style={[
            {
              backgroundColor: colors.surface,
            },
            styles.button,
          ]}
          onPress={veceraPlus}>
          <Text>+</Text>
        </IconButton>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}>
        <Button
          onPress={kupiBonove}
          style={[
            styles.button,
            {backgroundColor: colors.accent, width: '100%'},
          ]}
          disabled={
            user.nacinFinansiranja == 'Budžet' &&
            dorucak * 40 + rucak * 72 + vecera * 59 < user.stanjeRacuna
              ? false
              : user.nacinFinansiranja == 'Samofinansiranje' &&
                dorucak * 105 + rucak * 225 + vecera * 185 < user.stanjeRacuna
              ? false
              : true
          }>
          <Text>
            {user.nacinFinansiranja == 'Budžet' &&
            dorucak * 40 + rucak * 72 + vecera * 59 < user.stanjeRacuna
              ? 'Kupi'
              : user.nacinFinansiranja == 'Samofinansiranje' &&
                dorucak * 105 + rucak * 225 + vecera * 185 < user.stanjeRacuna
              ? 'Kupi'
              : 'Nedovoljno sredstava'}
          </Text>
        </Button>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}>
        <Text
          style={
            user.nacinFinansiranja == 'Budžet' &&
            dorucak * 40 + rucak * 72 + vecera * 59 < user.stanjeRacuna
              ? {fontSize: 16, fontWeight: '500', color: colors.placeholder}
              : user.nacinFinansiranja == 'Samofinansiranje' &&
                dorucak * 105 + rucak * 225 + vecera * 185 < user.stanjeRacuna
              ? {fontSize: 16, fontWeight: '500', color: colors.placeholder}
              : {fontSize: 16, fontWeight: '500', color: 'red'}
          }>
          Cena trenutne kupovine: -
          {user.nacinFinansiranja == 'Budžet'
            ? dorucak * 40 + rucak * 72 + vecera * 59
            : dorucak * 105 + rucak * 225 + vecera * 185}{' '}
          RSD
        </Text>
        <Text
          style={
            user.nacinFinansiranja == 'Budžet' &&
            dorucak * 40 + rucak * 72 + vecera * 59 < user.stanjeRacuna
              ? {fontSize: 16, fontWeight: '500', color: colors.placeholder}
              : user.nacinFinansiranja == 'Samofinansiranje' &&
                dorucak * 105 + rucak * 225 + vecera * 185 < user.stanjeRacuna
              ? {fontSize: 16, fontWeight: '500', color: colors.placeholder}
              : {fontSize: 16, fontWeight: '500', color: 'red'}
          }>
          Stanje na racunu: {user.stanjeRacuna} RSD
        </Text>
      </View>
    </View>
  );
};

export default BuyTokenScreen;

const styles = StyleSheet.create({
  formRow: {
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    margin: 5,
    height: 60,
    width: 60,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  button: {
    height: 60,
    width: 130,
    textAlign: 'center',
    justifyContent: 'center',

    borderRadius: 3,
  },
});
