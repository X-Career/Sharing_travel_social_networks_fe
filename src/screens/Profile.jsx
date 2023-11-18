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
} from 'react-native';
import styles from './profile.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackBtn, EditBtn, BirthdayForm, ChangeBtn} from '../components';
import CheckBox from '@react-native-community/checkbox';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  logout,
  update,
  readProfile,
  uploadAvatar,
} from '../redux/features/auth/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS} from '../constants';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {launchImageLibrary} from 'react-native-image-picker';
import {API_URL} from '@env';
import auth_header from '../services/auth_header';
import axios from 'axios';

console.log('AVATAR API: ', API_URL);

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  console.log('user useSelector: ', user);

  const [selectedGender, setSelectedGender] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const [pickedAvatar, setPickedAvatar] = useState(null);
  const [isPickedAvatar, setIsPickedAvatar] = useState(false);

  const formik = useFormik({
    initialValues: {
      birthday: '',
      description: '',
      fullname: '',
      gender: '',
    },
    validationSchema: Yup.object({
      birthday: Yup.string(),
      description: Yup.string(),
      fullname: Yup.string(),
      gender: Yup.string(),
    }),
    onSubmit: (values, {setSubmitting, setErrors}) => {
      dispatch(update(values))
        .then(() => {
          console.log('handle onSubmit succeed');
          setSubmitting(false);
        })
        .catch(error => {
          console.log('Error submit:', error.message);
          setErrors({submit: error.message});
          setSubmitting(false);
        });
      console.log('Profile/update formik:', values);
    },
  });

  // useEffect(() => {
  //   dispatch(readProfile());
  // }, [dispatch]);

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

  const handleChooseAvatar = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        allowsEditing: true,
        quality: 0.8,
        selectionLimit: 0,
      },
      response => {
        if (response.didCancel == true) {
          return;
        } else {
          console.log('Res of ChooseAvatar: ', response.assets);
          const newAvatar = response.assets[0];
          console.log('newAvatar: ', newAvatar);
          setPickedAvatar(newAvatar);
          setIsPickedAvatar(true);
        }
      },
    );
  };

  const handleUploadAvatar = async pickedAvatar => {
    console.log('pickedAvatar: ', pickedAvatar);
    const data = new FormData();
    data.append('avatar', {
      name: pickedAvatar.fileName,
      type: pickedAvatar.type,
      uri: pickedAvatar.uri,
    });
    console.log('Data Avatar: ', data);
    try {
      const res = await axios.post(
        `${API_URL}/user/cloudinary-upload/avatar`,
        data,
        {headers: auth_header()},
      );
      console.log('Upload Avatar Successed');
    } catch (e) {
      console.log('Err Upload: ', e);
    }
  };

  // const handleUploadAvatar = (pickedAvatar) => {
  //   console.log('test pickedA :', pickedAvatar);
  //   const data = new FormData();
  //   try {
  //     data.append('avatar', {
  //       name: pickedAvatar.fileName,
  //       type: pickedAvatar.type,
  //       uri: pickedAvatar.uri,
  //     });
  //     dispatch(uploadAvatar(data));
  //     console.log('Avatar data: ', data);
  //     console.log('Test pickedAvatar in upload: ', pickedAvatar);
  //   } catch (error) {
  //     if (error.response) {
  //       console.log('Err res data:', error.response.data);
  //       console.log('Err res status:', error.response.status);
  //       console.log('Err res headers:', error.response.headers);
  //     } else if (error.request) {
  //       console.log('Err request:', error.request);
  //     } else {
  //       console.log('Err message: ', error.message);
  //     }
  //     console.log('Err config: ', error.config);
  //     throw error;
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      {showEdit ? (
        <>
          <View style={styles.topLayout}>
            <View style={styles.topTitle}>
              <BackBtn onPress={() => setShowEdit(false)} name="back" />
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
                // source={{uri: user.avatar}}
                source={
                  pickedAvatar === null ? {uri: user.avatar} : pickedAvatar
                }
                style={styles.profileImg}
              />
              <ChangeBtn onPress={handleChooseAvatar} />
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
                        // value={formik.gender === 'Male'}
                        value={selectedGender === 'Male'}
                        onValueChange={newValue => {
                          setSelectedGender(newValue ? 'Male' : '');
                          formik.handleChange('gender')(newValue ? 'Male' : '');
                        }}
                        onBlur={formik.handleBlur('gender')}
                      />
                      <Text style={styles.desText}>Male</Text>
                    </View>

                    <View style={styles.genderItems}>
                      <CheckBox
                        tintColors={{true: COLORS.green, false: COLORS.red}}
                        value={selectedGender === 'Female'}
                        // value={formik.gender === 'Female'}
                        onValueChange={newValue => {
                          setSelectedGender(newValue ? 'Female' : '');
                          formik.handleChange('gender')(
                            newValue ? 'Female' : '',
                          );
                        }}
                        onBlur={formik.handleBlur('gender')}
                      />
                      <Text style={styles.desText}>Female</Text>
                    </View>
                  </View>

                  <View style={styles.wrapper}>
                    <BirthdayForm
                      onSelectDate={value => {
                        formik.setFieldValue('birthday', value);
                      }}
                      onBlur={formik.handleBlur('birthday')}
                    />
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
                      <Text style={{color: COLORS.red}}>
                        {formik.errors.description}
                      </Text>
                    ) : null}
                  </View>

                  {/* <View style={styles.wrapper}>
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
                  </View> */}
                  <View style={styles.wrapperBtn}>
                    <Button
                      radius={'sm'}
                      type="solid"
                      // onPress={handleSubmit}
                      onPress={async() => {
                        await formik.handleSubmit();
                        if (isPickedAvatar) {
                         await handleUploadAvatar(pickedAvatar);
                        }
                        setShowEdit(false);

                        handleLogout()
                      }}>
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
