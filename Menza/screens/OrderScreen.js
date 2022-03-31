import { StyleSheet, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BreakfastScreen from './BreakfastScreen';
import LunchScreen from './LunchScreen';
import DinnerScreen from './DinnerScreen';
import { lightTheme, darkTheme } from '../theme/colorScheme';
import { useTheme } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Loader from '../components/Loader';
import OrderDialog from '../components/OrderDialog';

const Tab = createMaterialTopTabNavigator();

function getStartOfToday() {
    const now = new Date();
    //now.setDate(now.getDate() + 2);
    now.setHours(0, 0, 0, 0);
    const timestamp = firestore.Timestamp.fromDate(now);
    return timestamp;
}

const OrderScreen = ({ user }) => {
    const scheme = useColorScheme();
    const { colors } = useTheme();
    const [days, setDays] = useState([])
    const [count, setCount] = useState(0)
    const [currentDayData, setCurrentDayData] = useState(null)
    const [currentMealData, setCurrentMealData] = useState(null)
    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const setCurrentDay = (data) => setCurrentDayData(data);
    const setCurrentMeal = (data) => setCurrentMealData(data);
    const clearData = () => { setCurrentMeal(null); setCurrentDay(null) };

    const fetchDays = async () => {
        try {
            await firestore()
                .collection('days').where('date', '>=', getStartOfToday()).orderBy('date')
                .onSnapshot((doc) => {
                    setDays([])
                    setCount(doc.docs.length)
                    doc.forEach(async d => {
                        await setDays(days => [...days, d.data()])
                    })
                })

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        let abortController = new AbortController()
        fetchDays()
        return () => {
            abortController.abort();
        }
    }, [])

    return (
        <>{
            days.length === count ?
                <NavigationContainer independent theme={scheme === 'dark' ? darkTheme : lightTheme}>
                    <Tab.Navigator>
                        <Tab.Screen name="Breakfast" options={{ title: "Doručak", tabBarStyle: { backgroundColor: colors.accent } }} >
                            {() => <BreakfastScreen days={days} setCurrentDay={setCurrentDay} setCurrentMeal={setCurrentMeal} showDialog={showDialog} />}
                        </Tab.Screen>
                        <Tab.Screen name="Lunch" options={{ title: "Ručak", tabBarStyle: { backgroundColor: colors.accent } }} >
                            {() => <LunchScreen days={days} setCurrentDay={setCurrentDay} setCurrentMeal={setCurrentMeal} showDialog={showDialog} />}
                        </Tab.Screen>
                        <Tab.Screen name="Dinner" options={{ title: "Večera", tabBarStyle: { backgroundColor: colors.accent } }} >
                            {() => <DinnerScreen days={days} setCurrentDay={setCurrentDay} setCurrentMeal={setCurrentMeal} showDialog={showDialog} />}
                        </Tab.Screen>
                    </Tab.Navigator>
                </NavigationContainer>
                :
                <Loader />
        }
            {
                currentMealData &&
                <OrderDialog clearData={clearData} currentDayData={currentDayData} currentMealData={currentMealData} hideDialog={hideDialog} user={user} visible={visible} />
            }
        </>
    )
}

export default OrderScreen;

const styles = StyleSheet.create({});
