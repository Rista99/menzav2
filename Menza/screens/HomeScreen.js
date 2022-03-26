import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Button, FAB, IconButton, useTheme } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { firestoreAutoId } from '../functions/firestoreAutoId';

function getStartOfToday() {
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    const timestamp = firestore.Timestamp.fromDate(now)
    return timestamp
}

function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    const [orderData, setOrderData] = useState([])

    const fetchData = async () => {
        try {
            await firestore()
                .collection('users')
                .doc(auth().currentUser.uid)
                .collection('orders')
                .where('date', '>=', getStartOfToday()).onSnapshot(doc => {
                    setOrderData([])
                    doc.forEach(d => {
                        setOrderData(orderData => [...orderData, d.data()]);
                    })
                });
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (orderData) {
    }

    const addToMap = async () => {
        try {

            const date = new Date('3/28/2022')

            const day = {
                date: date,
                meals: [
                    {
                        id: firestoreAutoId(),
                        name: 'Jaje na oko sa slaninom',
                        type: 1,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Lisnato testo sa višnjama',
                        type: 1,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Lisnato testo sa sirom',
                        type: 1,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Eurokrem',
                        type: 1,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Bečka šnicla sa varivom od šargarepe i krompirom',
                        type: 2,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Pileći batak sa pirinčem i graškom',
                        type: 2,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Pasulj',
                        type: 2,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Riblja pljeskavica sa krompir pireom',
                        type: 2,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Bečka šnicla sa krompir pireom',
                        type: 3,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Pizza makarone',
                        type: 3,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Pizza',
                        type: 3,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                    {
                        id: firestoreAutoId(),
                        name: 'Riblji štapići sa krompir pireom',
                        type: 3,
                        nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                    },
                ]
            }

            // await firestore().collection('days').doc(firestore.Timestamp.fromDate(date).toDate().toDateString().toString()).set(day)

        } catch (error) {
            console.error(error)
        }
    }

    const removeOrder = async (meal, day) => {
        try {
            await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).update({
                meals: firestore.FieldValue.arrayRemove(meal)
            })
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <ScrollView
                contentContainerStyle={styles.scrollViewContentStyle}>
                {orderData.map((od) => {
                    return (
                        <View key={od.id} style={{ width: '100%', marginTop: 10 }}>
                            <View style={[{ height: 50, justifyContent: 'center', backgroundColor: colors.surface }]}>
                                <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: '600', color: colors.onSurface }}>{od.date.toDate().toDateString()}</Text>
                            </View>
                            {od.meals.length === 0 ?
                                <View style={{ marginTop: 10 }}>
                                    <View style={[styles.cardStyle, { justifyContent: 'center', paddingVertical: 25, backgroundColor: colors.surface }]}>
                                        <Text style={{ textAlign: 'center', color: colors.onSurface }}>Nema ništa naručeno</Text>
                                    </View>
                                </View>
                                :
                                od.meals.map(m => {
                                    return (
                                        <View style={{ marginTop: 10 }} key={m.id}>
                                            <View style={[styles.cardStyle, { backgroundColor: colors.surface, flex: 1 }]}>
                                                <Image source={m.type === 1 ? require('../images/breakfast.png') : m.type === 2 ? require('../images/lunch.png') : m.type === 3 ? require('../images/dinner.png') : null} style={styles.cardImageStyle} />
                                                <Text style={[styles.cardTextCenter, { color: colors.onSurface }]}>{m.name}</Text>
                                                <IconButton icon='delete' color={colors.error} onPress={() => removeOrder(m, od)} />
                                            </View>
                                        </View>
                                    )
                                })}
                        </View>
                    )
                })}
            </ScrollView>
            {/* <Button onPress={addToMap}>Add hardcodded meal</Button> */}
            <FAB icon='edit' style={[[styles.fab], { backgroundColor: colors.primary }]} onPress={() => navigation.navigate('Order')} />
        </>
    );
}
export default HomeScreen

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
        alignItems: 'center'
    },
    cardImageStyle: {
        marginRight: 10,
        height: 70,
        width: 70
    },
    cardTextCenter: {
        fontSize: 15,
        flexWrap: 'wrap',
        maxWidth: '50%',
        textAlign: 'justify'
    },
    cardTextRight: {
        fontWeight: '700',
        fontSize: 20
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: '-1%',
    },
});
