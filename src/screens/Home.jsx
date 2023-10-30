import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NewsFeed } from '../components';
import { fetchPosts } from '../redux/features/newsfeed/postsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  // console.log('Posts/Home: ', posts)
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);


  // useEffect(() => {
  //   dispatch(fetchPosts());
  //   console.log('Posts/Home/useEffect: ', posts)
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPosts(page));
    setPage(page + 1);
    console.log('Posts/Home/useEffect: ', posts);
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchPosts(page));
    setPage(page + 1);
    console.log('Posts/Home/LoadMore: ', posts);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchPosts(1)).then(() => setRefreshing(false));
    setPage(2);
    console.log('Posts/Home/onRefresh: ', posts);
  }, [dispatch, posts]);

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
          onEndReachedThreshold={0.1}
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
