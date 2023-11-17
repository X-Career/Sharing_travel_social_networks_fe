import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './newsFeed.style.js'
import {Account, CardImage, Comments, Interact, Content} from '../index.js';


const NewsFeed = ({post}) => {
  return (
    <View style={styles.container}>

      <Account username={post.username} avatar={post.avatar} createdAt={post.createdAt} />

      <Content content={post.content} />
      <CardImage images={post.images}/>
          <Interact comments={post.comments} postId={post._id}/>
    </View>
  )
}

export default NewsFeed;