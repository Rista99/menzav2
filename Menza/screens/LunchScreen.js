import { ScrollView, StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { List, useTheme } from 'react-native-paper'
import { firestoreAutoId } from '../functions/firestoreAutoId';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

const LunchScreen = ({ route }) => {
    const { colors } = useTheme();

    const [expanded, setExpanded] = useState(false);

    const { _meals } = route.params
    const [days, setDays] = useState(_meals)

    const handlePress = () => setExpanded(!expanded);

    const addToOrder = async (meal, day) => {
        try {
            const exists = (await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).get()).exists
            if (!exists) {
                await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).set({
                    id: firestoreAutoId(),
                    date: day.date,
                    meals: firestore.FieldValue.arrayUnion(meal)
                })
            } else if (exists) {
                await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).update({
                    meals: firestore.FieldValue.arrayUnion(meal)
                })
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
                            <List.Accordion title={d.date.toDate().toDateString()} key={d.id} style={{ backgroundColor: colors.accent, paddingVertical: 10 }} theme={{ dark: 0 }}>
                                {d.meals.filter(m => m.type === 2).map(m => {
                                    return (
                                        <View key={m.id}>
                                            <List.Item
                                                left={() => <Image style={{ width: 50, height: 50 }} source={require('../images/lunch.png')} />}
                                                title={m.name} onPress={() => { addToOrder(m, d) }} style={{ backgroundColor: colors.surface, marginVertical: 5, borderRadius: 20, marginHorizontal: 15 }} titleStyle={{ color: colors.onSurface }} >
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

export default LunchScreen

const styles = StyleSheet.create({})