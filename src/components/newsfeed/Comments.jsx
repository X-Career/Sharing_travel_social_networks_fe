import {View, TextInput, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {COLORS, SIZES} from '../../constants/index'

const Comments = () => {
  const [comment, setComment] = useState('')
  return (
    <View>
      <TextInput
        placeholder="Comment..."
        placeholderTextColor="#83829A"
        // value={name}
        style={styles.longInput}
        onChangeText={text => setComment(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  longInput: {
    backgroundColor: COLORS.offwhite,
    // width: SIZES.width - 50,
    // height: 50,
    borderRadius: 10,
    paddingStart: 20,
    color: COLORS.black,
  },
})

export default Comments;
