import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';


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

            <ScrollView style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}
                contentContainerStyle={{ justifyContent: 'flex-start', alignContent: 'flex-start' }}>
                {meals.map(m => {
                    return (
                        <View style={{ backgroundColor: 'white', marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%', borderRadius: 10, flexWrap: 'wrap' }} key={m.id}>
                            <Image source={m.avatar} style={{ marginRight: 10, height: 70, width: 70 }} />
                            <Text style={{ marginRight: 40, color: "black", marginTop: 20, fontSize: 20 }}>{m.name}</Text>
                            <Text style={{ fontWeight: '700', marginRight: 10, color: "black", marginTop: 20, fontSize: 20 }}>{m.numberOfMeals}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </>
    );
}
export default HomeScreen
