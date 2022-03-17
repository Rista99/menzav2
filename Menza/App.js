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
import firestore from '@react-native-firebase/firestore'
import Loader from './components/Loader';

const Stack = createNativeStackNavigator();


export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [authUser, setAuthUser] = useState();
  const scheme = useColorScheme();
  const [user, setUser] = useState();
  const { colors } = useTheme(scheme === 'dark' ? darkTheme : lightTheme);

  getUser = async () => {
    await firestore().collection('users').doc(auth().currentUser.uid).onSnapshot(doc => (setUser(doc.data())))
  }

  function onAuthStateChanged(user) {
    setAuthUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    getUser()
    return subscriber;
  }, []);

  if (initializing) {
    return null
  }

  return (
    <PaperProvider settings={{
      icon: props => <AntDesign {...props} />
    }} theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
        <Stack.Navigator >
          {!authUser ?
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> :
            (user ?
              <>
                <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({ headerRight: () => <HeaderRightButtons navigation={navigation} />, headerTitleAlign: 'left', title: 'Menza', headerStyle: { backgroundColor: colors.accent } })}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{ userProfile: user }} options={{ title: 'Profil', headerStyle: { backgroundColor: colors.accent } }} />
                <Stack.Screen name="Order" component={OrderScreen} options={{ title: 'Narudžbina', headerStyle: { backgroundColor: colors.accent } }} />
              </>
              : <Stack.Screen name="loading" component={Loader} />)
          }
        </Stack.Navigator>
      </NavigationContainer>
      {!user ? null : <Footer thisUser={user} />}
    </PaperProvider>
  );
}
