import { TouchableOpacity } from "react-native";
import React from 'react';
import styles from './backBtn.style.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../constants';


const BackBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backBtn}>
          <AntDesign
              name='back'
              size={32}
              color={COLORS.white} />

    </TouchableOpacity>
  )
}

export default BackBtn