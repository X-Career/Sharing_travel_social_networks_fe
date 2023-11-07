import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './newsFeed.style.js'
import {Account, CardImage, Comments, Interact, Content} from '../index.js';


const NewsFeed = ({post}) => {
  return (
    <View style={styles.container}>
      <Account username={post.username}/>
      <Content content={post.content} />
      <CardImage images={post.images}/>
          <Interact />
          <Comments />
    </View>
  )
}

export default NewsFeed;