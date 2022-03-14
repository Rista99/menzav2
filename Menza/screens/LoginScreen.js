import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  View
} from 'react-native';
import React, { useState } from 'react';
import { signIn } from '../hooks/signIn';
import { Button, useTheme } from 'react-native-paper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{ marginTop: '50%', width: '100%', alignItems: 'center', flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: '600', maxWidth: '70%', textAlign: 'center', marginBottom: '10%', flex: 1, maxHeight: '8%' }}>Menza Srbija - Login</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize='none'
          value={email}
          placeholderTextColor="#C7C7CD"
          onChangeText={text => setEmail(text)}
          style={[styles.input, { backgroundColor: colors.surface }]}
        />
        <TextInput
          placeholder="Password"
          autoCapitalize='none'
          placeholderTextColor="#C7C7CD"
          value={password}
          onChangeText={text => setPassword(text)}
          style={[styles.input, { backgroundColor: colors.surface }]}
          secureTextEntry
        />
        <Button icon='login' contentStyle={{ height: 50, flexDirection: 'row-reverse' }} style={{ backgroundColor: '#0782F9', borderRadius: 10, marginTop: '10%', width: '50%' }} mode="outlined" color='white' onPress={() => signIn(email, password)}>Log in</Button>
      </View>
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
    flex: 1,
    width: '80%',
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: '5%',
    maxHeight: 60,
    minHeight: 60
  },
});
