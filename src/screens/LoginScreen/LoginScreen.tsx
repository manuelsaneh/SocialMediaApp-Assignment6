import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Colors} from '../../styles/Colors';
import CustomButton from '../../components/atoms/buttons/CustomButton';
import {useAppDispatch} from '../../utils/hooks/hooks';
import {setToken} from '../../utils/slices/authSlice';
import axios from 'axios';
import {setUser} from '../../utils/slices/userSlice';
import LoginInputContainer from '../../components/molecules/LoginInputContainer';

const LoginScreen = () => {
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const onLogin = useCallback(async () => {
    try {
      setLoading(true);
      const result = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      dispatch(setToken(result.data.token));

      dispatch(
        setUser({
          id: result.data.id,
          username: result.data.username,
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          image: result.data.image,
          gender: result.data.gender,
        }),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [dispatch, password, username]);

  return (
    <View style={styles.root}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>
        <LoginInputContainer
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.buttonContainer}>
            <CustomButton title="Login" onPress={onLogin} />
          </View>
        )}
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  loginText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: Colors.secondary,
  },

  buttonContainer: {
    marginTop: 40,
  },
});
