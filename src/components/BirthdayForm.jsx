import { View, Text, Platform, Button } from 'react-native';
import React,{useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './birthdayForm.style.js';


const BirthdayForm = ({onSelectDate}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState('--/--/----');




  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false); 
    setDate(currentDate);
    
    let formattedDate = currentDate.getDate().toString().padStart(2,'0') + '/' + (currentDate.getMonth() + 1).toString().padStart(2,'0') + '/' + currentDate.getFullYear();
    setText(formattedDate)

    // console.log('Birthday value: ', formattedDate)
    onSelectDate(formattedDate)

    onChange(event.target.value)
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewBtn}>
        <Button onPress={showMode} title={'Pick your birthday'}        />
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
      <Text style={styles.text}> {text}</Text>
    </View>
  );
};

export default BirthdayForm;