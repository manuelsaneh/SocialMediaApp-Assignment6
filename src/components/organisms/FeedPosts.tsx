import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {Colors} from '../../styles/Colors';
import {PostsType} from '../../types';

const FeedPosts = ({item}: {item: PostsType}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [imageUser, setImageUser] = useState('');
  const feedImage = item.image;

  const getUser = useCallback(async () => {
    try {
      const result = await axios.get(
        `https://dummyjson.com/users/${item.userId}`,
      );
      setFirstName(result.data.firstName);
      setLastName(result.data.lastName);
      setImageUser(result.data.image);
    } catch (err) {
      console.log(err);
    }
  }, [item.userId]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.postContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.imageUserContainer}>
          <Image
            style={styles.imageUser}
            source={
              imageUser
                ? {uri: imageUser}
                : require('../../assets/images/profilephoto.png')
            }
          />
        </View>
        <Text style={styles.textName}>
          {firstName} {lastName}
        </Text>
      </View>
      <Text style={styles.textTitle}>{item.title}</Text>
      <Text style={styles.textContent}>{item.body}</Text>
      {feedImage && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: feedImage}} />
        </View>
      )}
    </View>
  );
};

export default React.memo(FeedPosts, (prevProps, nextProps) => {
  return prevProps.item === nextProps.item;
});

const styles = StyleSheet.create({
  postContainer: {
    padding: 20,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  imageUserContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.secondary,
    overflow: 'hidden',
  },
  imageUser: {
    width: '100%',
    height: '100%',
  },
  textName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    paddingHorizontal: 10,
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
