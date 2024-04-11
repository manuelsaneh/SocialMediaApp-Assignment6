import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';

const Input = (props: TextInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    backgroundColor: Colors.secondary,
    color: Colors.primary,
    borderColor: Colors.secondary,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
