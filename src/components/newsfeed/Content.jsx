import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

const Content = ({content}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
    </View>
  )
}

export default Content;

const styles = StyleSheet.create({
  container: {
    marginStart: 6
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.black
  }
})