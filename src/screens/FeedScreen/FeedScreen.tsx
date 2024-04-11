import {FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {useAppSelector} from '../../utils/hooks/hooks';
import FeedPosts from '../../components/organisms/FeedPosts';
import {PostsType} from '../../types';

const FeedScreen = () => {
  const posts = useAppSelector(state => state.posts.posts);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const reversePosts = [...posts].reverse();

  const initialPage = 'https://dummyjson.com/posts';

  const getPosts = useCallback(
    async (url: string) => {
      try {
        setLoading(true);
        const result = await axios.get(url);
        setData([...reversePosts, ...result.data.posts]);
        setLoading(false);
        return result;
      } catch (err) {
        console.log(err);
      }
    },
    [reversePosts],
  );

  useEffect(() => {
    getPosts(initialPage);
  }, []);

  const onRefresh = () => {
    setData([...reversePosts]);
    getPosts(initialPage);
  };

  const renderItem = useCallback(({item}: {item: PostsType}) => {
    return <FeedPosts item={item} />;
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={renderItem}
        initialNumToRender={5}
        refreshing={loading}
        onRefresh={onRefresh}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
