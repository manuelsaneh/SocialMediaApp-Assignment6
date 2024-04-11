import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import AddPhotoBtn from '../atoms/buttons/AddPhotoBtn';

interface IAddPhotoProps {
  image: string;
  openLib: () => void;
}

const AddPhotoContainer = ({openLib, image}: IAddPhotoProps) => {
  return (
    <View style={styles.addPhotoContainer}>
      <AddPhotoBtn onPress={openLib} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
    </View>
  );
};

export default AddPhotoContainer;

const styles = StyleSheet.create({
  addPhotoContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
