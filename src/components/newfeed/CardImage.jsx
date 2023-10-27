import React from 'react';
import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';
import styles from './cardImage.style.js';



const images = [
  'https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg',
  'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
  'https://media.cntraveler.com/photos/6532c744e81ffee5102ec22c/3:2/w_1600%2Cc_limit/blake-guidry-p9vr45T2scg-unsplash_-2%2520copy.jpg',
  

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