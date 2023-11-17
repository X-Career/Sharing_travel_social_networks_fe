import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, { useState } from 'react';
import {COLORS, SIZES} from '../../constants/index'
import { API_URL } from '@env';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { fetchPosts } from '../../redux/features/newsfeed/postsSlice'; 
import axios from 'axios';
import auth_header from '../../services/auth_header';
import { useDispatch } from 'react-redux';


const CommentInput = ({postId}) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')

  const uploadComment = async (content) => {
    const data = new FormData();

    data.append('content', content);

    try {
      const res = await axios.post(
        `${API_URL}/user/post/${postId}/comment`,
        data,
        {
          headers: {
            ...auth_header(),
            'Content-Type': 'multipart/form-data', 
          },
        },
      );
      setTimeout(() => {
        dispatch(fetchPosts(1));
      }, 2000);
      console.log('Axios response:', res.data);
      setComment('')
      // console.log('data array image', res.data.post);
    } catch (e) {
      console.log('error: ', e);
    }
  }



  return (
    <View style={styles.longInput}>
      <TextInput
      style={{ flex: 1, marginRight: 10 }}
        placeholder="Comment..."
        placeholderTextColor="#83829A"
        value={comment}
        onChangeText={text => setComment(text)}
      />
      <TouchableOpacity onPress={() => uploadComment(comment)}>
        <AntDesign style={{marginRight: 20}}  name='right'
              size={32}
              color={COLORS.black}></AntDesign>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  longInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.offwhite,
    width:'100%',
    borderRadius: 10,
    paddingStart: 20,
    color: COLORS.black,
    alignItems: 'center'
  },
})

export default CommentInput;
