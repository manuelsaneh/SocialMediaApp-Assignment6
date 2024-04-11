import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Input from '../atoms/inputs/Input';
import {Colors} from '../../styles/Colors';
import CustomButton from '../atoms/buttons/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';

const DropDownEditUser = () => {
  const [showMoreEdit, setShowMoreEdit] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const toggleDropDownEdit = () => {
    Animated.timing(animatedValue, {
      toValue: showMoreEdit ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setShowMoreEdit(!showMoreEdit);
  };

  const animatedRotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  return (
    <>
      <Pressable onPress={toggleDropDownEdit}>
        <View style={styles.dropDown}>
          <Text style={styles.text}>Edit User</Text>
          <Animated.View style={{transform: [{rotate: animatedRotation}]}}>
            <Icon name="chevron-down-outline" size={20} />
          </Animated.View>
        </View>
      </Pressable>
      {showMoreEdit && (
        <View style={styles.inputContainer}>
          <Input
            maxLength={50}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="New Username"
            // value={username}
            // onChangeText={setUsername}
          />
          <Input
            maxLength={50}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="New First Name"
            // value={password}
            // onChangeText={setPassword}
          />
          <Input
            maxLength={50}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="New Last Name"
            // value={password}
            // onChangeText={setPassword}
          />
          <CustomButton title="Save" />
        </View>
      )}
    </>
  );
};

export default DropDownEditUser;

const styles = StyleSheet.create({
  dropDown: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
});
