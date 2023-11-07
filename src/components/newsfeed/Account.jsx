import { View, Text } from 'react-native';
import React from 'react';
import { ListItem, Avatar } from '@rneui/themed';
import styles from './account.style.js';
import {formatDistanceToNow } from 'date-fns';



const Account = ({username, avatar, createdAt}) => {

  return (
    <ListItem>
      <Avatar
        size={50}
        rounded
        // source={require('../../assets/images/profile.jpeg')}
        // source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
        source={{ uri: avatar }}
        containerStyle={{
          marginStart: -5
        }}
      />
      <ListItem.Content style={styles.content}>
        <ListItem.Title  style={styles.title}>{username}</ListItem.Title>

        <ListItem.Subtitle style={styles.subTitle}>{formatDistanceToNow(new Date(createdAt))} ago</ListItem.Subtitle>

      </ListItem.Content>
    </ListItem>
  )
}

export default Account;