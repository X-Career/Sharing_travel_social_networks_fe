import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React,{ useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewsFeed } from '../components';
import { userPost } from '../redux/features/auth/userSlice';



const MyTrips = () => {
  const dispatch = useDispatch();
  const userPosts = useSelector(state => state.auth.userPosts.posts)
  console.log('userPosts screen: ', userPosts)

  useEffect(() => {
    dispatch(userPost())
  }, [dispatch])
  

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View>
        <Text           style={{
            color: 'black',
            fontSize: 30,
            fontFamily: 'Poppins-SemiBold',
            marginStart: 14,
          }}>My trips</Text>
        <FlatList
          data={userPosts}
          keyExtractor={(item, index) => { return index.toString()}}
          renderItem={({ item }) => <NewsFeed post={item} />}
        />
      </View>
    </SafeAreaView>
  )
}

export default MyTrips;