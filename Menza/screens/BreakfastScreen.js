import { ScrollView, StyleSheet, Image, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { List, useTheme } from 'react-native-paper'


const BreakfastScreen = ({ days, currentDayData, currentMealData, setCurrentDay, setCurrentMeal, showDialog }) => {
    const { colors } = useTheme();
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);

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
                                            <List.Item left={() => <Image style={{ width: 50, height: 50 }} source={require('../images/breakfast.png')} />} title={m.name} onPress={() => {
                                                setCurrentMeal(m)
                                                setCurrentDay(d)
                                                showDialog()
                                            }} style={{ backgroundColor: colors.surface, marginVertical: 5, borderRadius: 20, marginHorizontal: 15 }} titleStyle={{ color: colors.onSurface }} >
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