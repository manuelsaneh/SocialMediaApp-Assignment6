import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useAppSelector} from '../../utils/hooks/hooks';
import {Colors} from '../../styles/Colors';
import axios from 'axios';
import UserPosts from '../../components/organisms/UserPosts';
import ProfileContainer from '../../components/organisms/ProfileContainer';
import {PostsType} from '../../types';

const ProfileScreen = () => {
  const user = useAppSelector(state => state.user.user);
  const posts = useAppSelector(state => state.posts.posts);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const reversePosts = [...posts].reverse();

  const getUserPosts = useCallback(async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://dummyjson.com/posts/user/${user?.id}`,
      );
      setData([...reversePosts, ...result.data.posts]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [reversePosts, user?.id]);

  useEffect(() => {
    getUserPosts();
  }, []);

  const renderItem = useCallback(({item}: {item: PostsType}) => {
    return <UserPosts item={item} />;
  }, []);

  return (
    <View style={styles.root}>
      <ProfileContainer user={user} />
      <View style={styles.postsContainer}>
        {loading && <ActivityIndicator />}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default React.memo(ProfileScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary,
  },

  postsContainer: {
    flex: 3,
  },
});
