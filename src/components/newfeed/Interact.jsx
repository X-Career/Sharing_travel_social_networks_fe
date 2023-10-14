import { View, Text, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import styles from './interact.style.js'

const Interact = () => {
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={styles.container}>
      <CheckBox
        checked={checked}
        checkedIcon='heart'
        uncheckedIcon='heart-o'
        checkedColor='red'
        onPress={toggleCheckbox}
      />
      <TouchableOpacity>
      <Icon
        name='commenting-o'
        color='#C1C0C8'
          type='font-awesome'
          size={28}
        // onPress={()=> console.log('comment')}
        />
        </TouchableOpacity>
    </View>
  )
}

export default Interact;