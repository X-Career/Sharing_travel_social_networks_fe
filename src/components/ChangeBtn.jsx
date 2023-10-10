import { TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './changeBtn.style.js';
import MaterialComumunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants';


const ChangeBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.changeBtn}>
      <MaterialComumunityIcons name='pencil-circle' size={36} color={COLORS.primary} />
    </TouchableOpacity>
  )
}

export default ChangeBtn