import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/Colors';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/MainNavigator.types';
import CustomButton from '../../components/atoms/buttons/CustomButton';

const WelcomeScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        See What's happening in the world right now
      </Text>
      <CustomButton title="Login" onPress={goToLoginScreen} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 40,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
    color: Platform.OS === 'android' ? Colors.secondary : Colors.link,
  },
});
