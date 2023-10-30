import { View, Text } from 'react-native';
import React from 'react';
import { ListItem, Avatar } from '@rneui/themed';
import styles from './account.style.js';


const Account = () => {
  return (
    <ListItem>
      <Avatar
        size={40}
        rounded
        // source={require('../../assets/images/profile.jpeg')}
        source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
      />
      <ListItem.Content style={styles.content}>
        <ListItem.Title  style={styles.title}>John Schema</ListItem.Title>
        <ListItem.Subtitle style={styles.subTitle}>2h ago</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default Account;