import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LunchScreen = () => {

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
            <Text style={{ color: 'black' }}>RUCAK</Text>
        </ScrollView>
    )
}

export default LunchScreen

const styles = StyleSheet.create({})