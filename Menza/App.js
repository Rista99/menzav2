import React, { useState, useEffect } from 'react';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import auth from '@react-native-firebase/auth';
import { HeaderRightButtons } from './components/HeaderRightButtons';
import ProfileScreen from './screens/ProfileScreen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import OrderScreen from './screens/OrderScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      ...NavigationDarkTheme.colors,
    },
  };

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
    <PaperProvider settings={{
      icon: props => <AntDesign {...props} />
    }} theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <Stack.Navigator>
          {!user ?
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> :
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({ headerRight: () => <HeaderRightButtons navigation={navigation} />, headerTitleAlign: 'left', title: 'Menza' })}
              />
              <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
              <Stack.Screen name="Order" component={OrderScreen} options={{ title: 'Narudžbina' }} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
