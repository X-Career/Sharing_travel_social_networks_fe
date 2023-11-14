import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {CheckBox, Icon} from '@rneui/themed';
import styles from './interact.style.js';
import CommentInput from './CommentInput.jsx';
import Comment from './Comment.jsx';

const Interact = ({comments, postId}) => {
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);

  function renderModal({comments, postId}) {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View style={styless.container}>
          <View style={styless.modal}>
            <View style={{flexDirection: 'row', marginTop: 50}}>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                <Text style={styless.close}>X</Text>
              </TouchableOpacity>
              <Text style={styless.commentTitle}>Comments</Text>
            </View>
            <View style={styless.commentContainer}>
              <FlatList
                data={comments}
                keyExtractor={(item, index) => {
                  return index.toString();
                }}
                renderItem={({item}) => <Comment comment={item} />}
              />
            </View>
          </View>
          <View style={styless.commentInput}>
            <CommentInput postId={postId} />
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.container}>
      <CheckBox
        checked={checked}
        checkedIcon="heart"
        uncheckedIcon="heart-o"
        checkedColor="red"
        onPress={toggleCheckbox}
      />
      <TouchableOpacity>
        <Icon
          name="commenting-o"
          color="#C1C0C8"
          type="font-awesome"
          size={28}
          onPress={() => setOpenModal(true)}
        />
      </TouchableOpacity>
      {renderModal({comments, postId})}
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4D4D4',
  },
  modal: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  commentTitle: {
    fontSize: 20,
    marginLeft: '32%',
    fontWeight: 'bold',
  },
  close: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  commentContainer: {},
  commentInput: {
    marginBottom: 40,
    width: '100%',
  },
});

export default Interact;
