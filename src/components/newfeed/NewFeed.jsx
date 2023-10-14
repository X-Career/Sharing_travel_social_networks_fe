import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './newFeed.style.js'
import {Account, CardImage, Comments, Interact} from '../index.js';

const NewFeed = () => {
  return (
    <View style={styles.container}>
          <Account />
          <CardImage />
          <Interact />
          <Comments />
    </View>
  )
}

export default NewFeed;