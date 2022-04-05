import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {FAB, IconButton, useTheme} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {firestoreAutoId} from '../functions/firestoreAutoId';
import QRDialog from '../components/QRDialog';
import {removeOrder} from '../functions/database/removeOrder';
import getTomorrow from '../functions/getTomorrow';
import getStartOfToday from '../functions/getStartOfToday';

function HomeScreen({navigation}) {
  const {colors} = useTheme();
  const [orderData, setOrderData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [qrMeal, setQrMeal] = useState(null);
  const [qrDay, setQrDay] = useState(null);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const clearData = () => {
    setQrMeal(null);
    setQrDay(null);
  };

  useEffect(() => {
    try {
      const unsubscribe = firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .collection('orders')
        .where('date', '>=', getStartOfToday())
        .onSnapshot(async doc => {
          await setOrderData([]);
          doc.forEach(async d => {
            await setOrderData(orderData => [...orderData, d.data()]);
          });
        });
      return () => unsubscribe();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addToMap = async () => {
    try {
      const date = new Date('4/1/2022');

      const day = {
        id: firestoreAutoId(),
        date: date,
        meals: [
          {
            id: firestoreAutoId(),
            name: 'Jaje na oko sa slaninom',
            type: 1,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Lisnato testo sa višnjama',
            type: 1,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Lisnato testo sa sirom',
            type: 1,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Eurokrem',
            type: 1,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Bečka šnicla sa varivom od šargarepe i krompirom',
            type: 2,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Pileći batak sa pirinčem i graškom',
            type: 2,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Pasulj',
            type: 2,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Riblja pljeskavica sa krompir pireom',
            type: 2,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Bečka šnicla sa krompir pireom',
            type: 3,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Pizza makarone',
            type: 3,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Pizza',
            type: 3,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
          {
            id: firestoreAutoId(),
            name: 'Riblji štapići sa krompir pireom',
            type: 3,
            nutrients:
              'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
          },
        ],
      };

      await firestore()
        .collection('days')
        .doc(
          firestore.Timestamp.fromDate(date).toDate().toDateString().toString(),
        )
        .set(day);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <View style={{flex: 1}}>
        {orderData.length === 0 && (
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginHorizontal: '10%',
            }}>
            <Text
              style={{
                color: colors.placeholder,
                textAlign: 'center',
              }}>
              Pritisnite dugme za naručivanje kako biste naručili obrok.
            </Text>
          </View>
        )}
        <ScrollView>
          <View style={{marginBottom: '20%'}}>
            {orderData.map(od => {
              return (
                <View key={od.id} style={{width: '100%', marginTop: 10}}>
                  <View
                    style={[
                      {
                        height: 50,
                        justifyContent: 'center',
                        backgroundColor: colors.surface,
                      },
                    ]}>
                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: 20,
                        fontWeight: '600',
                        color: colors.onSurface,
                      }}>
                      {od.date.toDate().toDateString()}
                    </Text>
                  </View>
                  {od.meals.length === 0 ? (
                    <View style={{marginTop: 10}}>
                      <View
                        style={[
                          styles.cardStyle,
                          {
                            justifyContent: 'center',
                            paddingVertical: 25,
                            backgroundColor: colors.surface,
                          },
                        ]}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: colors.onSurface,
                          }}>
                          Nema ništa naručeno
                        </Text>
                      </View>
                    </View>
                  ) : (
                    od.meals.map(m => {
                      return (
                        <View style={{marginTop: 10}} key={m.id}>
                          <View
                            style={[
                              styles.cardStyle,
                              {backgroundColor: colors.surface},
                            ]}>
                            <Image
                              source={
                                m.type === 1
                                  ? require('../images/breakfast.png')
                                  : m.type === 2
                                  ? require('../images/lunch.png')
                                  : m.type === 3
                                  ? require('../images/dinner.png')
                                  : null
                              }
                              style={styles.cardImageStyle}
                            />
                            <Text
                              style={[
                                styles.cardTextCenter,
                                {color: colors.onSurface},
                              ]}>
                              {m.name}
                            </Text>
                            {od.date.toDate() > getTomorrow() ? (
                              <IconButton
                                icon="delete"
                                color={colors.error}
                                onPress={() => removeOrder(m, od)}
                              />
                            ) : (
                              <IconButton
                                icon="qrcode"
                                color={colors.black}
                                onPress={() => {
                                  setQrDay(od);
                                  setQrMeal(m);
                                  showDialog();
                                }}
                              />
                            )}
                          </View>
                        </View>
                      );
                    })
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      {/* <Button onPress={addToMap}>Add hardcodded meal</Button> */}
      <FAB
        icon="edit"
        style={[[styles.fab], {backgroundColor: colors.primary}]}
        onPress={() => navigation.navigate('Order')}
      />

      {qrMeal && qrDay && (
        <QRDialog
          clearData={clearData}
          hideDialog={hideDialog}
          qrDay={qrDay}
          qrMeal={qrMeal}
          visible={visible}
        />
      )}
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    flexWrap: 'wrap',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  cardImageStyle: {
    marginRight: 10,
    height: 70,
    width: 70,
  },
  cardTextCenter: {
    fontSize: 15,
    flexWrap: 'wrap',
    maxWidth: '50%',
    textAlign: 'center',
  },
  cardTextRight: {
    fontWeight: '700',
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: '-1%',
  },
});
