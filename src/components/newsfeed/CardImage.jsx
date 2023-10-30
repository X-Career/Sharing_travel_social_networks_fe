import React from 'react';
import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';
import styles from './cardImage.style.js';



  
const CardImage = ({images}) => {
  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.gray2}
        sliderBoxHeight={450}
      />

    </View>
  )
}

export default CardImage;