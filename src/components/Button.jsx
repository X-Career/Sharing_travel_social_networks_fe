import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from './button.style.js'

const Button = ({onPress,title, loader, isValid}) => {
  return (
      <TouchableOpacity
          onPress={onPress}
            style={styles.btnStyle}
      >

          <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button