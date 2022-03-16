import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BreakfastScreen from './BreakfastScreen';
import LunchScreen from './LunchScreen';
import DinnerScreen from './DinnerScreen';
import { lightTheme, darkTheme } from '../theme/colorScheme';
import { useTheme } from 'react-native-paper';


const Tab = createMaterialTopTabNavigator();

const OrderScreen = () => {
    const scheme = useColorScheme();
    const { colors } = useTheme();

    return (
        <>
            <NavigationContainer independent theme={scheme === 'dark' ? darkTheme : lightTheme}>
                <Tab.Navigator>
                    <Tab.Screen name="Breakfast" component={BreakfastScreen} options={{ title: "Doručak", tabBarStyle: { backgroundColor: colors.accent } }} />
                    <Tab.Screen name="Lunch" component={LunchScreen} options={{ title: "Ručak", tabBarStyle: { backgroundColor: colors.accent } }} />
                    <Tab.Screen name="Dinner" component={DinnerScreen} options={{ title: "Večera", tabBarStyle: { backgroundColor: colors.accent } }} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default OrderScreen

const styles = StyleSheet.create({})