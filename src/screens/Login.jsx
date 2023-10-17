import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Alert,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../redux/features/auth/userSlice';
import styles, {root} from '../components/LoginStyle';
import MyButton from '../components/LoginBtn';
import MyInput from '../components/LoginInput';




const Login = () => {
    const dispatch = useDispatch();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async () => {
        console.log(username, password);
        try {
          const res = await dispatch(login({username, password}));
          console.log('res', res);
          if (res) {
            console.log('login success');
          }
        } catch (e) {
          Alert.alert('login error');
          console.log('login error', e);
        } finally {
        }
      };

    const handlerpasswod= () => {
        dispatch(setSigin(3))
    }
    const handler= () => {dispatch(setSigin(2))}
    
    return ( 
        <View style={styles.loginBottom}>
            <View style={{...styles.from}}>
                    <MyInput icon="user" text="username" name={username} setName={setUserName} suffixIcon={false}/>
                    <MyInput icon="lock1" text="password" name={password} setName={setPassword} suffixIcon={true}/>                    
                    <View style={styles.forgot}>
                        <TouchableOpacity onPress={handlerpasswod} >
                            <Text style={{...styles.text,color: root.mainColor,}}>
                                Forgot passwword?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <MyButton stylebtn={{...styles.btn_primary, marginTop:50, }} 
                        styleText={styles.text_primary} title='sign in' handler={handleLogin}/>  
            </View>
    
            <View style={{...styles.loginEnd, }}>
                <View  >
                    <Text style={{...styles.text}}>
                        Don't have account? 
                    </Text>
                </View>
                <TouchableOpacity onPress={handler}>
                    <Text style={styles.text_up}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default Login;