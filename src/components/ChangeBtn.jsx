import { TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './changeBtn.style.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants';


const ChangeBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.changeBtn}>
      <MaterialCommunityIcons name='pencil-circle' size={36} color={COLORS.primary} />
    </TouchableOpacity>
  )
}

export default ChangeBtn