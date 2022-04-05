import React, {useState, useEffect, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider, useTheme} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import auth from '@react-native-firebase/auth';
import {HeaderRightButtons} from './components/HeaderRightButtons';
import ProfileScreen from './screens/ProfileScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OrderScreen from './screens/OrderScreen';
import {lightTheme, darkTheme} from './theme/colorScheme';
import {useColorScheme} from 'react-native';
import Footer from './components/Footer';
import firestore from '@react-native-firebase/firestore';
import Loader from './components/Loader';
import BuyTokenScreen from './screens/BuyTokenScreen';

const Stack = createNativeStackNavigator();
export const UserContext = createContext();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [authUser, setAuthUser] = useState();
  const scheme = useColorScheme();
  const [user, setUser] = useState();
  const {colors} = useTheme(scheme === 'dark' ? darkTheme : lightTheme);

  const getUser = async () => {
    try {
      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .onSnapshot(async doc => {
          await setUser(doc.data());
        });
    } catch (error) {
      console.error(error);
    }
  };

  function onAuthStateChanged(user) {
    setAuthUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    let abortController = new AbortController();
    if (authUser) {
      getUser();
    }
    return () => {
      abortController.abort();
    };
  }, [authUser]);

  if (initializing) {
    return null;
  }

  return (
    <UserContext.Provider value={user ? user : null}>
      <PaperProvider
        settings={{
          icon: props => <AntDesign {...props} />,
        }}
        theme={scheme === 'dark' ? darkTheme : lightTheme}>
        <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
          <Stack.Navigator>
            {!authUser ? (
              <Stack.Screen name="Login" options={{headerShown: false}}>
                {props => <LoginScreen {...props} />}
              </Stack.Screen>
            ) : user ? (
              <>
                <Stack.Screen
                  name="Home"
                  options={({navigation}) => ({
                    headerRight: () => (
                      <HeaderRightButtons navigation={navigation} />
                    ),
                    headerTitleAlign: 'left',
                    title: 'Menza',
                    headerStyle: {backgroundColor: colors.accent},
                  })}>
                  {props => <HomeScreen {...props} />}
                </Stack.Screen>
                <Stack.Screen
                  name="Profile"
                  options={{
                    title: 'Profil',
                    headerStyle: {backgroundColor: colors.accent},
                  }}>
                  {props => <ProfileScreen {...props} />}
                </Stack.Screen>
                <Stack.Screen
                  name="BuyToken"
                  options={{
                    title: 'Kupi bonove',
                    headerStyle: {backgroundColor: colors.accent},
                  }}>
                  {props => <BuyTokenScreen {...props} />}
                </Stack.Screen>
                <Stack.Screen
                  name="Order"
                  options={{
                    title: 'Narudžbina',
                    headerStyle: {backgroundColor: colors.accent},
                  }}>
                  {props => <OrderScreen {...props} />}
                </Stack.Screen>
              </>
            ) : (
              <Stack.Screen name="Loading" options={{headerShown: false}}>
                {() => <Loader />}
              </Stack.Screen>
            )}
          </Stack.Navigator>
        </NavigationContainer>
        {!user || !authUser ? null : <Footer />}
      </PaperProvider>
    </UserContext.Provider>
  );
}
