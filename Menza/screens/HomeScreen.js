import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';


function HomeScreen() {

    const meals = [
        {
            id: 1,
            name: "Breakfast",
            avatar: require('../images/breakfast.png'),
            numberOfMeals: 0,
        },
        {
            id: 2,
            name: "Lunch",
            avatar: require('../images/lunch.png'),
            numberOfMeals: 12,
        },
        {
            id: 3,
            name: "Dinner",
            avatar: require('../images/dinner.png'),
            numberOfMeals: 4,
        },
    ]

    return (
        <>
            <ScrollView style={styles.scrollViewStyle}
                contentContainerStyle={styles.scrollViewContentStyle}>
                {meals.map(m => {
                    return (
                        <TouchableOpacity key={m.id} onPress={() => {
                            alert(`Type: ${m.name}\nMeals left: ${m.numberOfMeals}`);
                        }}>
                            <View style={styles.cardStyle} >
                                <Image source={m.avatar} style={styles.cardImageStyle} />
                                <Text style={styles.cardTextCenter}>{m.name}</Text>
                                <Text style={styles.cardTextRight}>{m.numberOfMeals}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10
    },
    scrollViewContentStyle: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
    },
    cardStyle: {
        backgroundColor: 'white',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 10,
        flexWrap: 'wrap'
    },
    cardImageStyle: {
        marginRight: 10,
        height: 70,
        width: 70
    },
    cardTextCenter: {
        marginRight: 40,
        color: "black",
        marginTop: 20,
        fontSize: 20
    },
    cardTextRight: {
        fontWeight: '700',
        marginRight: 10,
        color: "black",
        marginTop: 20,
        fontSize: 20
    }
});
