import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {login} from '../redux/features/auth/userSlice';
import styles, {root} from '../components/LoginStyle';
import MyButton from '../components/LoginBtn';
import {Myinput, UsernameInput} from '../components';
import styleL from './login.style.js';

const image = require('../assets/images/login.png');

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    // console.log('Login account: ', username, password);
    try {
      const res = await dispatch(login({username, password}));
      //   console.log('res', res);
      if (res) {
        console.log('login success');
      }
    } catch (e) {
      console.log('login error', e);
    } finally {
    }
  };

  const handlerpasswod = () => {
    navigation.navigate('Forgot');
  };
  const handler = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styleL.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styleL.imgBackground}>
        <View style={styleL.content}>
          <Text style={styleL.contentText1}>Welcome to </Text>
          <Text style={styleL.contentText}>SomeWhere </Text>
        </View>
        <View style={styleL.body}>
          <View style={styleL.form}>
            <UsernameInput
              icon="user"
              text="username"
              name={username}
              setName={setUserName}
            />
            <Myinput
              icon="lock1"
              text="password"
              name={password}
              setName={setPassword}
              suffixIcon={true}
            />
            <View style={styles.forgot}>
              <TouchableOpacity onPress={handlerpasswod}>
                <Text style={{...styles.text, color: root.mainColor}}>
                  Forgot passwword?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styleL.signinBtn}>
            <MyButton
              stylebtn={{...styles.btn_primary, marginTop: 50}}
              styleText={styles.text_primary}
              title="sign in"
              handler={handleLogin}
            />
          </View>

          <View style={styleL.btn}>
            <View>
              <Text style={{...styles.text}}>Don't have account? </Text>
            </View>
            <TouchableOpacity onPress={handler}>
              <Text style={styles.text_up}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
