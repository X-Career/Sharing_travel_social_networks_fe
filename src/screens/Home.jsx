import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NewsFeed } from '../components';
import { fetchPosts } from '../redux/features/newsfeed/postsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);


  useEffect(() => {
    dispatch(fetchPosts(page));
    setPage(page + 1);
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchPosts(page));
    setPage(page + 1);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1)
    dispatch(fetchPosts(1)).then(() => setRefreshing(false));

}, [dispatch]);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontFamily: 'Poppins-SemiBold',
            marginStart: 14,
          }}>
          SomeWhere
        </Text>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.9}
          renderItem={({item}) => <NewsFeed post={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
