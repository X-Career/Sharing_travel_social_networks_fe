import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {COLORS} from '../constants/index';
import {SliderBox} from 'react-native-image-slider-box';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import auth_header from '../services/auth_header';
import { BackBtn, EditBtn } from '../components';
import { API_URL } from '@env';


console.log('Post url: ', API_URL) 




const Post = ({navigation}) => {
  const navigatation = useNavigation();
  const [textNote, setTextNote] = useState('');
  const [images, setImages] = useState([]);

  const handleUploadPost = async (content, images) => {
    const data = new FormData();

    data.append('content', content);

    images.forEach((image, index) => {
      data.append('images', {
        name: image.fileName,
        type: image.type,
        uri: image.uri,
      }); 
    });
    console.log('Post data: ',data);

    try {
      const res = await axios.post(
        `${API_URL}/user/cloudinary-upload/post`,
        data,
        {
          headers: {
            ...auth_header(),
            'Content-Type': 'multipart/form-data', 
          },
        },
      );

      // console.log('Axios response:', res.data);
      // console.log('data array image', res.data.post);
      handleCancel();
    } catch (e) {
      console.log('error: ', e);
    }
  };

  const handleChooseImages = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        allowsEditing: true,
        quality: 0.8,
        selectionLimit: 0,
      },
      response => {
        if (response.didCancel == true) {
          return;
        } else {
          // console.log('response', response);
          const selectedImages = response.assets.map(asset => asset);
          setImages(selectedImages);
        }
        // console.log('imagess', images);
      },
    );
  };

  const handleCancel = () => {
    setImages([]);
    setTextNote('');
    // navigatation.navigate('Home');
    // navigation.pop();
    navigation.push('Bottom Navigation');

  };

  return (
    <View style={styles.container}>
      <View style={styles.navigatePost}>
        <View style={{flex: 1}}>
          <BackBtn
            onPress={handleCancel}
            name="left"
            style={styles.navigateButtonPost}
          />
        </View>
        <View style={{flex: 1}}>
          <EditBtn
            onPress={() => handleUploadPost(textNote, images)}
            name="progress-upload"
            style={styles.navigateButtonPost}
          />
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Caption..."
          style={styles.textInput}
          onChangeText={value => setTextNote(value)}
          value={textNote}
          keyboardType="default"
          multiline
        />
      </View>
      <View style={styles.chooseImageButton}>
        <TouchableOpacity onPress={handleChooseImages}>
          <Text>Choose your image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sliderBox}>
        <SliderBox
          images={images}
          dotColor={COLORS.primary}
          inactiveDotColor={COLORS.gray2}
          sliderBoxHeight={400}
          ImageComponentStyle={{borderRadius: 15, width: '100%', marginTop: 5}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  navigatePost: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  navigateButtonPost: {
    alignItems: 'flex-start', 
  },
  textInputContainer: {
    marginTop: 70,
    width: '90%',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: COLORS.lightWhite,
  },
  textInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  chooseImageButton: {
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 20,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 4,
    height: 40,
    width: '40%',
  },
  sliderBox: {
    flex: 5, 
    marginTop: 20, 
    borderRadius: 5
  }
});

export default Post;
