import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {
  Button,
  FAB,
  IconButton,
  Paragraph,
  useTheme,
  Portal,
  Dialog,
  Divider,
} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {firestoreAutoId} from '../functions/firestoreAutoId';
import QRCode from 'react-native-qrcode-svg';

function getStartOfToday() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const timestamp = firestore.Timestamp.fromDate(now);
  return timestamp;
}

function getTomorrow() {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  now.setHours(23, 59, 59, 999);
  const timestamp = firestore.Timestamp.fromDate(now);
  return now;
}

function HomeScreen({navigation}) {
  const {colors} = useTheme();
  const [orderData, setOrderData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [qrMeal, setQrMeal] = useState(null);
  const [qrDay, setQrDay] = useState(null);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const clearData = () => {
    setQrDay(null);
    setQrMeal(null);
  };

  const fetchData = async () => {
    try {
      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .collection('orders')
        .where('date', '>=', getStartOfToday())
        .onSnapshot(doc => {
          setOrderData([]);
          doc.forEach(async d => {
            await setOrderData(orderData => [...orderData, d.data()]);
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let abortController = new AbortController();
    fetchData();
    return () => {
      abortController.abort();
    };
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

  const removeOrder = async (meal, day) => {
    try {
      switch (meal.type) {
        case 1:
          await firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .update({brojDorucaka: firestore.FieldValue.increment(1)});
          break;
        case 2:
          await firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .update({brojRuckova: firestore.FieldValue.increment(1)});
          break;
        case 3:
          await firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .update({brojVecera: firestore.FieldValue.increment(1)});
          break;
      }
      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .collection('orders')
        .doc(day.date.toDate().toDateString())
        .update({
          meals: firestore.FieldValue.arrayRemove(meal),
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
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
                            {backgroundColor: colors.surface, flex: 1},
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
      {/* <Button onPress={addToMap}>Add hardcodded meal</Button> */}
      <FAB
        icon="edit"
        style={[[styles.fab], {backgroundColor: colors.primary}]}
        onPress={() => navigation.navigate('Order')}
      />

      {qrMeal && qrDay && (
        <View>
          <Portal>
            <Dialog
              style={{paddingBottom: 10, borderRadius: 15}}
              visible={visible}
              onDismiss={() => {
                hideDialog();
                clearData();
              }}>
              <View>
                <Dialog.Title style={{textAlign: 'center'}}>
                  {qrMeal.name}
                </Dialog.Title>
                <Divider
                  style={{
                    backgroundColor: colors.onSurface,
                    marginTop: 10,
                    marginBottom: 20,
                  }}
                />
              </View>
              <Dialog.Content
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <QRCode
                  value={`UserId: ${
                    auth().currentUser.uid
                  }\n Date: ${qrDay.date.toDate()}\n MealId: ${qrMeal.id}`}
                  backgroundColor="transparent"
                  color="black"
                  size={200}
                />
                <Paragraph style={{marginTop: 15}}>
                  {qrMeal.nutrients}
                </Paragraph>
              </Dialog.Content>
            </Dialog>
          </Portal>
        </View>
      )}
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  scrollViewContentStyle: {
    justifyContent: 'center',
  },
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
