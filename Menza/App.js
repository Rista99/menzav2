import React, { useState, useEffect } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import auth from '@react-native-firebase/auth';
import { HeaderRightButtons } from './components/HeaderRightButtons';
import ProfileScreen from './screens/ProfileScreen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import OrderScreen from './screens/OrderScreen';
import { lightTheme, darkTheme } from './theme/colorScheme';
import { useColorScheme } from 'react-native';
import Footer from './components/Footer';

const Stack = createNativeStackNavigator();


export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const scheme = useColorScheme();


  const { colors } = useTheme(scheme === 'dark' ? darkTheme : lightTheme);

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
    }} theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
        <Stack.Navigator >
          {!user ?
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> :
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({ headerRight: () => <HeaderRightButtons navigation={navigation} />, headerTitleAlign: 'left', title: 'Menza', headerStyle: { backgroundColor: colors.accent } })}
              />
              <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil', headerStyle: { backgroundColor: colors.accent } }} />
              <Stack.Screen name="Order" component={OrderScreen} options={{ title: 'Narudžbina', headerStyle: { backgroundColor: colors.accent } }} />
            </>
          }
        </Stack.Navigator>
        {!user ? null : <Footer />}
      </NavigationContainer>
    </PaperProvider>
  );
}
