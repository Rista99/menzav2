import { ScrollView, StyleSheet, Image, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { List, useTheme } from 'react-native-paper'
import { firestoreAutoId } from '../functions/firestoreAutoId';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

const BreakfastScreen = ({ route }) => {

    const { colors } = useTheme();

    const { _days, _user } = route.params
    const [days, setDays] = useState(_days)
    const [currentUser, setcurrentUser] = useState(_user)


    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);

    const addToOrder = async (meal, day) => {
        try {
            const exists = (await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).get()).exists
            if (currentUser.brojDorucaka !== 0) {
                if (!exists) {
                    await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).set({
                        id: firestoreAutoId(),
                        date: day.date,
                        meals: firestore.FieldValue.arrayUnion(meal)
                    })
                    await firestore().collection('users').doc(auth().currentUser.uid).update({ brojDorucaka: firestore.FieldValue.increment(-1) })
                } else if (exists) {

                    await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).update({
                        meals: firestore.FieldValue.arrayUnion(meal = {
                            ...meal,
                            id: firestoreAutoId()
                        })
                    })
                    await firestore().collection('users').doc(auth().currentUser.uid).update({ brojDorucaka: firestore.FieldValue.increment(-1) })
                }
            } else {
                alert('Nemate dovoljno bonova za odabrani obrok')
            }


        } catch (error) {
            console.error(error)
        }

    }


    return (
        <>
            <ScrollView>
                <List.Section>
                    {days.map(d => {
                        return (
                            <List.Accordion title={d.date.toDate().toDateString()} key={d.id} style={{ backgroundColor: colors.accent, paddingVertical: 10 }} >
                                {d.meals.filter(m => m.type === 1).map(m => {
                                    return (
                                        <View key={m.id}>
                                            <List.Item left={() => <Image style={{ width: 50, height: 50 }} source={require('../images/breakfast.png')} />} title={m.name} onPress={() => { addToOrder(m, d) }} style={{ backgroundColor: colors.surface, marginVertical: 5, borderRadius: 20, marginHorizontal: 15 }} titleStyle={{ color: colors.onSurface }} >
                                            </List.Item>
                                        </View>
                                    )
                                })}
                            </List.Accordion>
                        );
                    })}
                </List.Section>
            </ScrollView>
        </>
    )
}

export default BreakfastScreen

const styles = StyleSheet.create({

})