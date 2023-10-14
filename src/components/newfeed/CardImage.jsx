import React from 'react';
import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';
import styles from './cardImage.style.js';



const images = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',

  ]

  
const CardImage = () => {
  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.gray2}
        sliderBoxHeight={450}
        
        // ImageComponentStyle={{width: '100%'}}
      />

    </View>
  )
}

export default CardImage;