
import {View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { NewFeed } from '../components';
import Post from '../components/Post';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
    <Post />
        <View >
          <Text style={{ color: 'black', fontSize: 30, fontFamily: 'Poppins-SemiBold', marginStart: 14 }}>SomeWhere</Text>
          
          {/* <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <NewFeed item={item} />}
          /> */}

          <NewFeed />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
