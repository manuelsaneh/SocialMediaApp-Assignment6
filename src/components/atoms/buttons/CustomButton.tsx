import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';

interface ICustomButtonProps {
  onPress: () => void;
  title: string;
}

const CustomButton = ({onPress, title}: ICustomButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.innerButton}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 30,
  },
  innerButton: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
});
