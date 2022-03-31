import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  View,
  useColorScheme
} from 'react-native';
import React, { useState } from 'react';
import { signIn } from '../functions/signIn';
import { Button, useTheme } from 'react-native-paper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();
  const scheme = useColorScheme();

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
          placeholderTextColor={colors.placeholder}
          autoCapitalize='none'
          value={email}
          onChangeText={text => setEmail(text)}
          style={[styles.input, { backgroundColor: colors.surface, color: scheme === 'dark' ? colors.onSurface : colors.accent }]}
        />
        <TextInput
          placeholder="Password"
          autoCapitalize='none'
          placeholderTextColor={colors.placeholder}
          value={password}
          onChangeText={text => setPassword(text)}
          style={[styles.input, { backgroundColor: colors.surface, color: scheme === 'dark' ? colors.onSurface : colors.accent }]}
          secureTextEntry
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Button icon='login' contentStyle={{ height: 50, flexDirection: 'row-reverse' }} style={{ borderRadius: 10, marginTop: '10%', width: '50%', backgroundColor: colors.primary }} mode="outlined" color={colors.accent} onPress={() => signIn(email, password)}>Log in</Button>
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