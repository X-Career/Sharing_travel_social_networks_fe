import { TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './editBtn.style.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../constants/theme.js';

const EditBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.editBtn}>
          <AntDesign
              name='edit'
              size={32}
              color={COLORS.white} />
    </TouchableOpacity>
  )
}

export default EditBtn