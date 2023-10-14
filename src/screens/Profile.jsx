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



import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useSelector, useDispatch} from 'react-redux';
import {
  setName,
  setGender,
  setBirthday,
  setDescription,
} from '../redux/features/profile/profileSlice';
import {COLORS} from '../constants';

import {SelectDropDown} from 'react-native-select-dropdown';


const Profile = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);


  const dispatch = useDispatch();
  const name = useSelector(state => state.profile.name);
  const gender = useSelector(state => state.profile.gender);
  const birthday = useSelector(state => state.profile.birthday);
  const description = useSelector(state => state.profile.description);

  const [showEdit, setShowEdit] = useState(false);
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topLayout}>
        <View style={styles.topTitle}>
          <BackBtn onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Profile</Text>
          {/* <EditBtn onPress={handleEdit} /> */}
        </View>
        <View style={styles.subTopLayout}>
          <View style={styles.radiusLeft}></View>
          <View style={styles.radiusRight}></View>
        </View>
      </View>

      {showEdit ? (
        <View style={styles.botLayout}>
          <View style={styles.Img}>
            <Image
// source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
              source={require('../assets/images/profile.jpeg')}
              style={styles.profileImg}
            />
            <ChangeBtn />
          </View>

          <KeyboardAvoidingView
            style={styles.infoUser}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                <Text style={styles.fullName}>Antoni Shikota</Text>
                <Text style={styles.email}>shikota@gmail.com</Text>
                <View style={styles.wrapper}>
                  <TextInput
                    placeholder="Enter your full name"
                    placeholderTextColor="#83829A"
                    value={name}
                    style={styles.longInput}
                    onChangeText={text => dispatch(setName(text))}
                  />
                </View>
                <View style={[styles.wrapper, styles.checkBox]}>
                  <Text style={styles.genderText}>Gender</Text>
                  <View style={styles.genderItems}>
                    <CheckBox
                      tintColors={{true: COLORS.green, false: COLORS.red}}
                      value={isSelected}
                      onValueChange={setSelection}
                    />
                    <Text style={styles.desText}>Male</Text>
                  </View>

                  <View style={styles.genderItems}>
                    <CheckBox
                      tintColors={{true: COLORS.green, false: COLORS.red}}
                      value={!isSelected}
                      onValueChange={newValue => setSelection(!newValue)}
                    />
                    <Text style={styles.desText}>Female</Text>
                  </View>
                </View>

                <View style={styles.wrapper}>
                  <BirthdayForm />
                </View>

                <View style={styles.wrapper}>
                  <TextInput
                    placeholder="Enter your description"
                    placeholderTextColor="#83829A"
                    // value=""
                    style={styles.longInput}
                  />
                </View>

                <View style={styles.wrapper}>
                  <TextInput
                    secureTextEntry
                    placeholder="Enter new password"
                    placeholderTextColor="#83829A"
                    // value=""
                    style={styles.longInput}
                  />
                </View>
                {/* <Button title={'Save'} /> */}
                <View style={styles.wrapper}>
                  <Button radius={'sm'} type="solid">
                    Save
                    <Icon
                      size={20}
                      name="save"
                      color="white"
                      style={{paddingStart: 5}}
                    />
                  </Button>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      ) : (
        <View style={styles.botLayout}>
          <View style={styles.Img}>
            <Image
              // source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
              source={require('../assets/images/profile.jpeg')}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.infoUser}>
            <Text style={styles.fullName}>Antoni Shikota</Text>
            <Text style={styles.email}>shikota@gmail.com</Text>
            <View style={[styles.wrapperShow, styles.checkBox]}>
              <Text style={styles.genderText}>Gender:</Text>
              <View style={styles.genderItems}>
                <Text style={[styles.borderText, styles.desText]}>Male</Text>
              </View>

            </View>

            <View style={styles.genderItems}>

            <View style={[styles.wrapperShow, styles.wrapperDescription]}>
              <ScrollView>
                <Text style={styles.desText}>
                  Description Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Voluptas expedita quo ex asperiores
                  excepturi recusandae quod perferendis laboriosam saepe
                  voluptates.asperiores excepturi recusandae quod perferendis
                  laboriosam saepe voluptates.asperiores excepturi recusandae
                  quod perferendis laboriosam saepe voluptates.
                </Text>
              </ScrollView>
            </View>

            <View style={styles.wrapper}>
              <Button radius={'md'} type="solid" title={'Change Password'} />
            </View>

          </View>
          <Button
            title={'Save'}
          />

        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
