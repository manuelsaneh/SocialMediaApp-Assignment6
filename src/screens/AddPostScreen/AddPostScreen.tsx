import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../styles/Colors';
import CustomButton from '../../components/atoms/buttons/CustomButton';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/hooks';
import {addPost} from '../../utils/slices/postsSlice';
import notifee from '@notifee/react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/MainNavigator.types';
import AddPhotoContainer from '../../components/molecules/AddPhotoContainer';
import AddPostInputContainer from '../../components/molecules/AddPostInputContainer';

const AddPostScreen = () => {
  const user = useAppSelector(state => state.user.user);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainNavigatorNavigationProp>();

  const goToFeed = () => {
    navigation.navigate('Feed');
  };

  const handleAddPost = () => {
    dispatch(
      addPost({
        title,
        body: content,
        image,
        id: JSON.stringify(Math.random()),
        userId: user?.id,
      }),
    );
    setTitle('');
    setContent('');
    setImage('');
    onDisplayNotification();
    goToFeed();
  };

  const handleTitleChange = (enteredTitle: string) => {
    setTitle(enteredTitle);
  };
  const handleContentChange = (enteredContent: string) => {
    setContent(enteredContent);
  };

  async function onDisplayNotification() {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: `${user?.username} added a post`,
      body: title,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  const openLib = () => {
    let options: ImageLibraryOptions = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        return;
      } else if (response.errorMessage) {
        console.log(response.errorMessage);
        return;
      }
      setImage(response.assets[0].uri);
    });
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.addPostContainer}>
        <Text style={styles.title}>Share a post</Text>
        <AddPostInputContainer
          content={content}
          title={title}
          handleContentChange={handleContentChange}
          handleTitleChange={handleTitleChange}
        />
        <AddPhotoContainer image={image} openLib={openLib} />
        <CustomButton onPress={handleAddPost} title="Add Post" />
      </View>
    </ScrollView>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  addPostContainer: {
    marginHorizontal: 30,
    marginVertical: 40,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: Colors.secondary,
  },
});
