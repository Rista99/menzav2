<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import auth from '@react-native-firebase/auth';
=======
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import auth from '@react-native-firebase/auth';
import {HeaderRightButtons} from './components/HeaderRightButtons';
import ProfileScreen from './screens/ProfileScreen';
import BreakfastScreen from './screens/BreakfastScreen';
import OrderScreen from './screens/OrderScreen';
>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
<<<<<<< Updated upstream
    <NavigationContainer>
      <Stack.Navigator>
        {!user ?
          <Stack.Screen name="Login" component={LoginScreen} /> :
          <Stack.Screen name="Home" component={HomeScreen} />
        }
      </Stack.Navigator>
    </NavigationContainer>
=======
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!user ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({navigation}) => ({
                  headerRight: () => (
                    <HeaderRightButtons navigation={navigation} />
                  ),
                  headerTitleAlign: 'left',
                  title: 'Menza',
                })}
              />
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{title: 'Profil'}}
              />
              <Stack.Screen
                name="Order"
                component={OrderScreen}
                options={{title: 'Naruči'}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
