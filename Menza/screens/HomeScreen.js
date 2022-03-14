import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { FAB, IconButton, useTheme } from 'react-native-paper';
import Footer from '../components/Footer';

function HomeScreen({ navigation }) {
    const { colors } = useTheme();

    const days = [
        {
            id: 1,
            day: 'Ponedeljak',
            date: '10.3.2022.',
            meals: [
                {
                    id: 1,
                    name: 'Jaje na oko sa slaninom',
                    avatar: require('../images/breakfast.png'),
                    nutrients:
                        'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
                },
                {
                    id: 2,
                    name: 'Bečka šnicla sa krompir pireom',
                    avatar: require('../images/lunch.png'),
                    nutrients:
                        'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
                },
                {
                    id: 3,
                    name: 'Topljeni kačkavalj sa varivom od šargarepe',
                    avatar: require('../images/dinner.png'),
                    nutrients:
                        'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
                },
            ],
        },
        {
            id: 2,
            day: 'Utorak',
            date: '11.3.2022.',
            meals: [],
        },
        {
            id: 3,
            day: 'Sreda',
            date: '12.3.2022.',
            meals: [
                {
                    id: 1,
                    name: 'Jaje na oko sa slaninom',
                    avatar: require('../images/breakfast.png'),
                    nutrients:
                        'Calories from Fat 247. Calories 433.\n42% Total Fat 27g.\n60% Saturated Fat 12g.\n79% Cholesterol 238mg.\n35% Sodium 838mg.\n8% Potassium 263mg.\n9% Total Carbohydrates 27g.',
                },
            ]
    return(
        <>
<ScrollView style = { styles.scrollViewStyle }
        contentContainerStyle = { styles.scrollViewContentStyle } >
                {
                    days.map((d) => {
                        return (
                            <View key={d.id} style={{ width: '100%' }}>
                                <View style={[{ height: 50, justifyContent: 'center', backgroundColor: colors.surface }]}>
                                    <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: '600', color: colors.text }}>{`${d.day} - ${d.date}`}</Text>
                                </View>
                                {d.meals.length === 0 ?
                                    <View style={[styles.cardStyle, { justifyContent: 'center', paddingVertical: 25, backgroundColor: colors.surface }]}>
                                        <Text style={{ textAlign: 'center' }}>Nema nista naruceno</Text>
                                    </View>
                                    :
                                    d.meals.map(m => {
                                        return (
                                            <View style={[styles.cardStyle, { backgroundColor: colors.surface, flex: 1 }]} key={m.id}>
                                                <Image source={m.avatar} style={styles.cardImageStyle} />
                                                <Text style={styles.cardTextCenter}>{m.name}</Text>
                                                <IconButton icon='info' onPress={() => alert(m.nutrients)} />
                                            </View>
                                        );
                                    })}
                            </View>
                        );
                    })
                }
    </ScrollView ><Footer /><FAB icon='edit' style={[[styles.fab], { backgroundColor: colors.primary }]} onPress={() => navigation.navigate('Order')} />
    </>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    scrollViewStyle: {

    },
    scrollViewContentStyle: {
        justifyContent: 'center',
    },
    cardStyle: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: 'center'
    },
    cardImageStyle: {
        marginRight: 10,
        height: 70,
        width: 70
    },
    cardTextCenter: {
        marginRight: 40,
        marginTop: '5%',
        fontSize: 15,
        flexWrap: 'wrap',
        maxWidth: '50%',
        textAlign: 'center'
    },
    cardTextRight: {
        fontWeight: '700',
        marginRight: 10,
        marginTop: 20,
        fontSize: 20
    },
    divider: {
        borderTopWidth: 1,
        borderTopColor: '#D0D0D0',
        width: "100%"
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: '6%',
    },
});
