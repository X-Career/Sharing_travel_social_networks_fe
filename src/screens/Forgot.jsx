import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {login} from '../redux/features/auth/userSlice';
import styles, {root} from '../components/LoginStyle';
import MyButton from '../components/LoginBtn';
import {Myinput, UsernameInput} from '../components';
import styleF from './forgot.style.js';

const image = require('../assets/images/forgot.png');

const Forgot = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const handleSend = async () => {
    console.log(username, email);

    // setUserName("")
    // setEmail("")
  };

  const handlerSignIn = () => {
    navigation.navigate('Login');
  };
  const handlerSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styleF.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styleF.imgBackground}>
        <View style={styleF.content}>
          <Text style={styleF.contentText}>Forgot Password?</Text>
        </View>
        <View style={styleF.form}>
          <View style={{...styles.from}}>
            <UsernameInput
              icon="user"
              text="username"
              name={username}
              setName={setUserName}
            />
            <Myinput icon="mail" text="email" name={email} setName={setEmail} />
          </View>

          <View style={styleF.btn}>
            <MyButton
              stylebtn={{...styles.btn_primary, marginTop: 50}}
              styleText={styles.text_primary}
              title="send"
              handler={handleSend}
            />
            <View style={styleF.footer}>
              <View>
                <Text >Don't have account?</Text>
              </View>
              <TouchableOpacity onPress={handlerSignUp}>
                <Text style={styles.text_up}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlerSignIn}>
                <Text style={styles.text_up}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Forgot;
