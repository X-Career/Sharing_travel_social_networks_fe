import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Account from './Account'

const Comment = ({comment}) => {

  return (

    <View style={styles.container}>
       <Account username={comment.username} avatar={comment.avatar} createdAt={comment.createdAt} />
      <Text style={styles.comment}>{comment.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
    paddingBottom: 12
  },
  comment: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '500'
  }
})

export default Comment