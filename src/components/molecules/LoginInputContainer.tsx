import {StyleSheet, View} from 'react-native';
import React from 'react';
import Input from '../atoms/inputs/Input';

interface ILoginInputProps {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const LoginInputContainer = ({
  username,
  setUsername,
  password,
  setPassword,
}: ILoginInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Input
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
    </View>
  );
};

export default LoginInputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
});
