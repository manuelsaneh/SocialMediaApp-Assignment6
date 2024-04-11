import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/Colors';
import {User} from '../../types';

const ProfileContainer = ({user}: {user: User | null}) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: user?.image}} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>
          {user?.firstName} {user?.lastName}
        </Text>
        <Text style={styles.infoText}>{user?.username}</Text>
        <Text style={styles.infoText}>{user?.gender}</Text>
      </View>
    </View>
  );
};

export default ProfileContainer;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.primary,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    margin: 20,
  },
  nameText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: Colors.primary,
  },
  infoText: {
    fontFamily: 'Poppins-Light',
    fontSize: 15,
    color: Colors.primary,
  },
});
