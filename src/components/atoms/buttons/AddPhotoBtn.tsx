import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {IOnPressProp} from './interface/interface';
import {Colors} from '../../../styles/Colors';

const AddPhotoBtn = ({onPress}: IOnPressProp) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Add Photo</Text>
    </Pressable>
  );
};

export default AddPhotoBtn;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 30,
    padding: 20,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.secondary,
  },
});
