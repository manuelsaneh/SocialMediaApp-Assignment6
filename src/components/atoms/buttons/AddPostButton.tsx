import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../styles/Colors';

const AddPostButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Icon name="add-outline" size={30} style={styles.icon} />
    </Pressable>
  );
};

export default AddPostButton;

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  icon: {
    color: Colors.primary,
  },
});
