import React, {useState, useEffect, useCallback} from 'react';
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
import {useFocusEffect} from '@react-navigation/native';
import styles from './profile.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackBtn, EditBtn, BirthdayForm, ChangeBtn} from '../components';
import CheckBox from '@react-native-community/checkbox';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {logout} from '../redux/features/auth/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {readProfile} from '../redux/features/auth/userSlice';
import {update} from '../redux/features/auth/userSlice';
import {COLORS} from '../constants';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  // console.log('Profile: ', user);
  const avatar = useSelector(state => state.user.user.avatar);
  console.log('Avatar: ', avatar);
  // const defaultAvatar = require('../assets/images/default-avatar.jpg');

  const [isSelected, setSelection] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [input, setInput] = useState({
    fullname: '',
    gender: '',
    birthday: '',
    description: '',
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  });

  const formik = useFormik({
    initialValues: {
      fullname: '',
      gender: '',
      birthday: '',
      description: '',
      oldPassword: '',
      newPassword: '',
    },
    validationSchema: Yup.object({
      fullname: Yup.string(),
      gender: Yup.string(),
      birthday: Yup.string(),
      description: Yup.string(),
      oldPassword: Yup.string(),
      newPassword: Yup.string(),
    }),
    onSubmit: values => {
      dispatch(update(values));
      console.log('Profile/update formik:', values);
    },
  });

  useEffect(() => {
    dispatch(readProfile());
  }, [dispatch]);

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

  const handleOnChange = (key, value) => {
    setInput({...input, [key]: value});
    console.log('Handle Input: ', key, value);
  };

  const handleSubmit = () => {
    const updateInput = Object.keys(input).reduce((acc, key) => {
      if (input[key] !== '') {
        acc[key] = input[key];
      }
      return acc;
    }, {});
    dispatch(update(updateInput));
    //   .then(() => {
    //   navigation.navigate('Profile')
    //   // navigation.pop();
    //   // navigation.push('Profile');
    // });
    console.log('Profile/update:', updateInput);
  };

  return (
    <SafeAreaView style={styles.container}>
      {showEdit ? (
        <>
          <View style={styles.topLayout}>
            <View style={styles.topTitle}>
              <BackBtn onPress={() => navigation.goBack()} name="back" />
              <Text style={styles.title}>Profile</Text>
            </View>
            <EditBtn onPress={handleEdit} name="account-cancel" />
            <View style={styles.subTopLayout}>
              <View style={styles.radiusLeft}></View>
              <View style={styles.radiusRight}></View>
            </View>
          </View>
          <View style={styles.botLayout}>
            <View style={styles.Img}>
              <Image
                // source={{uri: avatar}}
                source={{uri: user.avatar}}
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
                      style={styles.longInput}
                      // value={input.fullname}
                      // onChangeText={(value) => handleOnChange('fullname', value)}
                      onChangeText={formik.handleChange('fullname')}
                      onBlur={formik.handleBlur('fullname')}
                      value={formik.values.fullname}
                    />
                    {formik.touched.fullname && formik.errors.fullname ? (
                      <Text style={{color: COLORS.red}}>
                        {formik.errors.fullname}
                      </Text>
                    ) : null}
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
                      style={styles.longInput}
                      onChangeText={formik.handleChange('description')}
                      onBlur={formik.handleBlur('description')}
                      value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (
                      <Text style={{color: COLORS.red}}>{formik.errors.description}</Text>
                    ): null}
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
                  <View style={styles.wrapperBtn}>
                    <Button
                      radius={'sm'}
                      type="solid"
                      // onPress={handleSubmit}
                      onPress={formik.handleSubmit}>
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
        </>
      ) : (
        <>
          <View style={styles.topLayout}>
            <View style={styles.topTitle}>
              <BackBtn onPress={() => navigation.goBack()} name="back" />
              <Text style={styles.title}>Profile</Text>
            </View>
            <EditBtn onPress={handleEdit} name="account-edit-outline" />
            <View style={styles.subTopLayout}>
              <View style={styles.radiusLeft}></View>
              <View style={styles.radiusRight}></View>
            </View>
          </View>
          <View style={styles.botLayout}>
            <View style={styles.Img}>
              <Image
                // source={{uri: avatar}}
                source={{uri: user.avatar}}
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

              <View style={styles.wrapperBtn}>
                <Button
                  radius={'md'}
                  type="solid"
                  title={'Logout'}
                  onPress={handleLogout}
                />
              </View>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Profile;
