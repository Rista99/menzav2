import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BreakfastScreen from './BreakfastScreen';
import LunchScreen from './LunchScreen';
import DinnerScreen from './DinnerScreen';

const Tab = createMaterialTopTabNavigator();

const OrderScreen = () => {
    return (
        <NavigationContainer independent theme={DarkTheme}>
            <Tab.Navigator>
                <Tab.Screen name="Breakfast" component={BreakfastScreen} options={{ title: "Doručak" }} />
                <Tab.Screen name="Lunch" component={LunchScreen} options={{ title: "Ručak" }} />
                <Tab.Screen name="Dinner" component={DinnerScreen} options={{ title: "Večera" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default OrderScreen

const styles = StyleSheet.create({})