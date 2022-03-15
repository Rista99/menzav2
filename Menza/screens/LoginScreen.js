import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  View,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { signIn } from '../hooks/signIn';
import { Button, useTheme } from 'react-native-paper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Image source={require('../images/welcome.png')} style={{ width: 120, height: 120 }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ fontSize: 25, fontWeight: '600' }}>Menza Srbija - Login</Text>
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        <TextInput
          placeholder="Email"
          autoCapitalize='none'
          value={email}
          onChangeText={text => setEmail(text)}
          style={[styles.input, { backgroundColor: colors.surface }]}
        />
        <TextInput
          placeholder="Password"
          autoCapitalize='none'
          value={password}
          onChangeText={text => setPassword(text)}
          style={[styles.input, { backgroundColor: colors.surface }]}
          secureTextEntry
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Button icon='login' contentStyle={{ height: 50, flexDirection: 'row-reverse' }} style={{ backgroundColor: '#0782F9', borderRadius: 10, marginTop: '10%', width: '50%' }} mode="outlined" color='white' onPress={() => signIn(email, password)}>Log in</Button>
      </View>
    </KeyboardAvoidingView >
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: '13%',
    paddingHorizontal: '5%'
  },
});