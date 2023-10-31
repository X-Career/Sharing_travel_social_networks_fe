import { TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './editBtn.style.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/theme.js';

const EditBtn = ({onPress, name}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.editBtn}>
          <MaterialCommunityIcons
              name = {name}
              size={32}
              color={COLORS.white} />
    </TouchableOpacity>
  )
}

export default EditBtn