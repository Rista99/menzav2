import { ScrollView, StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, List, useTheme } from 'react-native-paper'

const BreakfastScreen = () => {

    const { colors } = useTheme();

    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);

    const days = [
        {
            id: 1,
            day: 'Ponedeljak',
            date: '10.3.2022.',
            meals: [
                {
                    id: 1,
                    name: "Jaje na oko sa slaninom",
                    avatar: require('../images/breakfast.png'),
                    nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'

                },
                {
                    id: 2,
                    name: "Bečka šnicla sa krompir pireom",
                    avatar: require('../images/breakfast.png'),
                    nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                },
                {
                    id: 3,
                    name: "Topljeni kačkavalj sa varivom od šargarepe",
                    avatar: require('../images/breakfast.png'),
                    nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                },
            ]
        },
        {
            id: 2,
            day: 'Utorak',
            date: '11.3.2022.',
            meals: []
        },
        {
            id: 3,
            day: 'Sreda',
            date: '12.3.2022.',
            meals: [
                {
                    id: 1,
                    name: "Jaje na oko sa slaninom",
                    avatar: require('../images/breakfast.png'),
                    nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                },
                {
                    id: 2,
                    name: "Bečka šnicla sa krompir pireom",
                    avatar: require('../images/breakfast.png'),
                    nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                },

            ]
        },
        {
            id: 4,
            day: 'Cetvrtak',
            date: '13.3.2022.',
            meals: []
        },
    ]

    return (
        <ScrollView>
            <List.Section>
                {days.map(d => {
                    return (
                        <List.Accordion title={`${d.day} - ${d.date}`} key={d.id} style={{ backgroundColor: colors.surface }} theme={{ dark: 0 }}>
                            {d.meals.map(m => {
                                return (
                                    <View key={m.id}>
                                        <List.Item left={() => <Image style={{ width: 50, height: 50 }} source={require('../images/breakfast.png')} />} title={m.name} onPress={() => { }} style={{ backgroundColor: colors.surface, marginVertical: 5, borderRadius: 20, marginHorizontal: 15 }} titleStyle={{}} >
                                        </List.Item>
                                    </View>
                                )
                            })}
                        </List.Accordion>
                    );
                })}
            </List.Section>
        </ScrollView>
    )
}

export default BreakfastScreen

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: 'white',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        flexWrap: 'wrap',
        marginHorizontal: 10
    },
    cardImageStyle: {
        marginRight: 10,
        height: 70,
        width: 70
    },
    cardTextCenter: {
        marginRight: 40,
        marginTop: '5%',
        color: "black",
        fontSize: 15,
        flexWrap: 'wrap',
        maxWidth: '50%',
        textAlign: 'center'
    },
})