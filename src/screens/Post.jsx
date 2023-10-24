import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const Post = () => {
  const [textNote, setTextNote] = useState('');
  const [images, setImages] = useState([]);
  const handleChooseImages = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        allowsEditing: true,
        quality: 0.8,
      },
      response => {
        if (response.didCancel == true) {
          return;
        } else {
          console.log('response', response);
          console.log('imagess', images);

          setImages(response.assets[0]);
        }
      },
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Note..."
          style={styles.textInput}
          onChangeText={value => setTextNote(value)}
          value={textNote}
          keyboardType="default"
          multiline
        />
      </View>
      <View>
        <TouchableOpacity onPress={handleChooseImages}>
          <Text>Choose your image</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* <Image source={images.uri} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    marginBottom: 100,
  },
});

export default Post;
