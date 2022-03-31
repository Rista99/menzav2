import {StyleSheet, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BreakfastScreen from './BreakfastScreen';
import LunchScreen from './LunchScreen';
import DinnerScreen from './DinnerScreen';
import {lightTheme, darkTheme} from '../theme/colorScheme';
import {useTheme} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Loader from '../components/Loader';

const Tab = createMaterialTopTabNavigator();

function getStartOfToday() {
  const now = new Date();
  //now.setDate(now.getDate() + 2);
  now.setHours(0, 0, 0, 0);
  const timestamp = firestore.Timestamp.fromDate(now);
  return timestamp;
}

const OrderScreen = ({route}) => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);
  const {currentUser} = route.params;

  const fetchDays = async () => {
    try {
      await firestore()
        .collection('days')
        .where('date', '>=', getStartOfToday())
        .orderBy('date')
        .onSnapshot(doc => {
          setDays([]);
          setCount(doc.docs.length);
          doc.forEach(d => {
            setDays(days => [...days, d.data()]);
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDays();
  }, []);

  return (
    <>
      {days.length === count ? (
        <NavigationContainer
          independent
          theme={scheme === 'dark' ? darkTheme : lightTheme}>
          <Tab.Navigator>
            <Tab.Screen
              name="Breakfast"
              component={BreakfastScreen}
              initialParams={{_days: days, _user: currentUser}}
              options={{
                title: 'Doručak',
                tabBarStyle: {backgroundColor: colors.accent},
              }}
            />
            <Tab.Screen
              name="Lunch"
              component={LunchScreen}
              initialParams={{_days: days, _user: currentUser}}
              options={{
                title: 'Ručak',
                tabBarStyle: {backgroundColor: colors.accent},
              }}
            />
            <Tab.Screen
              name="Dinner"
              component={DinnerScreen}
              initialParams={{_days: days, _user: currentUser}}
              options={{
                title: 'Večera',
                tabBarStyle: {backgroundColor: colors.accent},
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
