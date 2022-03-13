import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Touchable } from 'react-native';
import Footer from '../components/Footer';


function HomeScreen({ navigation }) {

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
                    avatar: require('../images/lunch.png'),
                    nutrients: 'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.'
                },
                {
                    id: 3,
                    name: "Topljeni kačkavalj sa varivom od šargarepe",
                    avatar: require('../images/dinner.png'),
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
                    avatar: require('../images/lunch.png'),
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
        <>
            <ScrollView style={styles.scrollViewStyle}
                contentContainerStyle={styles.scrollViewContentStyle}>
                {days.map((d) => {
                    return (
                        <View key={d.id} style={{ marginBottom: 10, width: '100%' }}>
                            <View style={[styles.divider, { backgroundColor: 'white', height: 50, justifyContent: 'center', marginBottom: 10 }]}>
                                <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: '600', color: 'black' }}>{`${d.day} - ${d.date}`}</Text>
                            </View>

                            {d.meals.length === 0 ?
                                <View style={[styles.cardStyle, { justifyContent: 'center', marginVertical: 20, paddingVertical: 30 }]}>
                                    <Text style={{ color: 'black', textAlign: 'center' }}>Nema nista naruceno</Text>
                                </View>
                                :
                                d.meals.map(m => {
                                    return (
                                        <View style={styles.cardStyle} key={m.id}>
                                            <Image source={m.avatar} style={styles.cardImageStyle} />
                                            <Text style={styles.cardTextCenter}>{m.name}</Text>
                                            <TouchableOpacity onPress={() => alert(m.nutrients)}>
                                                <Image style={{ width: 25, height: 25, marginRight: 15, marginVertical: '60%' }} source={require('../images/info.png')} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}
                        </View>
                    )
                })}

            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
    scrollViewStyle: {

    },
    scrollViewContentStyle: {
        justifyContent: 'center',
    },
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
    cardTextRight: {
        fontWeight: '700',
        marginRight: 10,
        color: "black",
        marginTop: 20,
        fontSize: 20
    },
    divider: {
        borderTopWidth: 1,
        borderTopColor: '#D0D0D0',
        width: "100%"
    },
});
