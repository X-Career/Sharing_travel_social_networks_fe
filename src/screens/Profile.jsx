import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import styles from './profile.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackBtn, EditBtn, Button, BirthdayForm} from '../components';
import CheckBox from '@react-native-community/checkbox';
import {SelectDropDown} from 'react-native-select-dropdown';

const Profile = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
    <>
      <View style={styles.topLayout}>
        <View style={styles.topTitle}>
          <BackBtn onPress={()=> navigation.goBack()} />
          <Text style={styles.title}>Profile</Text>
          {/* <EditBtn onPress={handleEdit} /> */}
        </View>
        <View style={styles.subTopLayout}>
          <View style={styles.radiusLeft}></View>
          <View style={styles.radiusRight}></View>
        </View>
      </View>
      <View style={styles.botLayout}>
        <View style={styles.Img}>
          <Image
            // source={require('../assets/images/userEx.jpg')}
            source={require('../assets/images/profile.jpeg')}
            style={styles.profileImg}
          />
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.fullName}>Antoni Shikota</Text>
          <Text style={styles.email}>shikota@gmail.com</Text>
          <View style={styles.wrapper}>
            <TextInput
              placeholder="Enter your full name"
              value="Antoni Shikota"
              style={styles.longInput}
            />
          </View>
          <View style={[styles.wrapper, styles.checkBox]}>
            <Text style={styles.genderText}>Gender</Text>
            <View style={styles.genderItems}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text>Male</Text>
            </View>

            <View style={styles.genderItems}>

            <CheckBox
              value={!isSelected}
              onValueChange={newValue => setSelection(!newValue)}
            />
            <Text>Female</Text>
            </View>
          </View>

          <View style={styles.wrapper}>
            <BirthdayForm />
          </View>

          {/* <View style={styles.wrapper}>
            <Text>Description</Text>
          </View> */}

          <View style={styles.wrapper}>
            <TextInput
              secureTextEntry
              placeholder="Enter new password"
              // value=""
              style={styles.longInput}
            />
          </View>
          <Button
            title={'Save'}
          />

        </View>
      </View>
      </>
     </SafeAreaView>

  );
};

export default Profile;
