import { View, Text, Button, Platform } from 'react-native';
import React,{useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './birthdayForm.style.js'

const BirthdayForm = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false); 
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View>
      <View>
        <Button onPress={showMode} title="Date of Birthday" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {/* <Text>{date.toString()}</Text> */}
    </View>
  );
};

export default BirthdayForm;