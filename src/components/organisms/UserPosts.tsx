import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/Colors';
import {PostsType} from '../../types';

const UserPosts = ({item}: {item: PostsType}) => {
  const image = item.image;
  return (
    <View style={styles.postContainer}>
      <Text style={styles.textTitle}>{item.title}</Text>
      <Text style={styles.textContent}>{item.body}</Text>
      {image && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
      )}
    </View>
  );
};

export default React.memo(UserPosts, (prevProps, nextProps) => {
  return prevProps.item === nextProps.item;
});

const styles = StyleSheet.create({
  postContainer: {
    padding: 20,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
  },
  textTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    marginBottom: 5,
  },
  textContent: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  imageContainer: {
    width: 300,
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
