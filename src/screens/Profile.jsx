import React, {useState, useEffect} from 'react';
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
  TouchableOpacity,
} from 'react-native';
import styles from './profile.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackBtn, EditBtn, BirthdayForm, ChangeBtn} from '../components';
import CheckBox from '@react-native-community/checkbox';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {logout} from '../redux/features/auth/userSlice';

import {useSelector, useDispatch} from 'react-redux';
import {
  setName,
  setGender,
  setBirthday,
  setDescription,
} from '../redux/features/profile/profileSlice';
import {readProfile} from '../redux/features/auth/userSlice';

import {COLORS} from '../constants';

const Profile = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  const dispatch = useDispatch();


  const user = useSelector(state => state.user.user);
  const avatar = useSelector(state => state.user.user.avatar);
  // console.log('log user data in profile:', user);
  const defaultAvatar = require('../assets/images/default-avatar.jpg');

  useEffect(() => {
    dispatch(readProfile());
  }, [dispatch]);

  const [showEdit, setShowEdit] = useState(false);
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleLogout = async () => {
    try {
      console.log('logout');
      await dispatch(logout());
    } catch (e) {
      console.log('logout error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topLayout}>
        <View style={styles.topTitle}>
          <BackBtn onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Profile</Text>
          {/* <EditBtn onPress={handleEdit} /> */}
        </View>
        <EditBtn onPress={handleEdit} />
        <View style={styles.subTopLayout}>
          <View style={styles.radiusLeft}></View>
          <View style={styles.radiusRight}></View>
        </View>
      </View>
      {showEdit ? (
        <View style={styles.botLayout}>
          <View style={styles.Img}>
            <Image
              source={avatar === '0' ? defaultAvatar : {uri: avatar}}
              style={styles.profileImg}
            />
            <ChangeBtn />
          </View>

          <KeyboardAvoidingView
            style={styles.infoUser}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                <Text style={styles.fullName}>{user.fullname}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <View style={styles.wrapper}>
                  <TextInput
                    placeholder="Enter your full name"
                    placeholderTextColor="#83829A"
                    // value={name}
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
                    placeholder="Enter old password"
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
                <View style={styles.wrapperBtn}>
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
              source={avatar === '0' ? defaultAvatar : {uri: avatar}}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.infoUser}>
            <Text style={styles.fullName}>{user.fullname}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <View style={[styles.wrapperShow, styles.checkBox]}>
              <Text style={styles.genderText}>Gender:</Text>
              <View style={styles.genderItems}>
                <Text style={[styles.borderText, styles.desText]}>
                  {user.gender}
                </Text>
              </View>
            </View>
            <View style={[styles.wrapperShow, styles.checkBox]}>
              <Text style={styles.genderText}>Birthday:</Text>
              <View style={styles.genderItems}>
                <Text style={[styles.borderText, styles.desText]}>
                  {user.birthday}
                </Text>
              </View>
            </View>
            <View style={[styles.wrapperShow, styles.wrapperDescription]}>
              <ScrollView>
                <Text style={styles.desText}>{user.description}</Text>
              </ScrollView>
            </View>

            {/* <View style={styles.wrapper}>
              <Button radius={'md'} type="solid" title={'Change Password'} />
            </View> */}
            <View style={styles.wrapperBtn}>
              <Button
                radius={'md'}
                type="solid"
                title={'Logout'}
                onPress={handleLogout}
              />
            </View>
            {/* </View> */}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
