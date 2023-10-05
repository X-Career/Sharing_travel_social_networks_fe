import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from './button.style.js'

const Button = ({onPress,title, loader, isValid, width}) => {
  return (
      <TouchableOpacity
          // onPress={onPress}
          onPress={onPress}
      // style={styles.btnStyle(60)}
      style={styles.btnStyle(50)}

      
      >

          <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button