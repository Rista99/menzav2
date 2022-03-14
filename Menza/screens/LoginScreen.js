import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import React, { useState } from 'react';
import { signIn } from '../hooks/signIn';
import { Button } from 'react-native-paper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../images/welcome.png')} style={{ maxWidth: 150, maxHeight: 150, marginTop: '20%', flex: 1 }} />
      <Text style={{ color: 'black', marginTop: '5%', fontSize: 20, fontWeight: '600', maxWidth: '70%', textAlign: 'center', marginBottom: '10%', flex: 1, maxHeight: '8%' }}>Dobrodošli u mobilnu aplikaciju "Menza Srbija"</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize='none'
        value={email}
        placeholderTextColor="#C7C7CD"
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize='none'
        placeholderTextColor="#C7C7CD"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />
      <Button icon='logout' contentStyle={{ height: 50, flexDirection: 'row-reverse' }} style={{ backgroundColor: '#0782F9', borderRadius: 10, marginTop: '10%', width: '50%' }} mode="outlined" color='white' onPress={() => signIn(email, password)}>Login</Button>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    width: '80%',
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: '5%',
    maxHeight: 60,
    minHeight: 60
  },
});
