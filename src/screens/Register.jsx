import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { register,login } from '../redux/features/auth/userSlice';
import styles, {root} from '../components/LoginStyle';
import MyButton from '../components/LoginBtn';
import {Myinput, UsernameInput} from '../components';




const Register = () => {
    const dispatch = useDispatch();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkPass, setCheckPass] = useState(true);

    const navigation = useNavigation()
    
    const handleRegister = async () => {
        // console.log(username, email, password);
        try {
            if (password !== confirmPassword) {
                return setCheckPass(false)
            } else {
                const res = await dispatch(register({username, email, password}))
                console.log('res', res);
                if (res) {
                    console.log('register success');
                    setCheckPass(true)
                    setUserName("")
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                }
                
                try {
                    const result = await dispatch(login({username, password}))
                    if (result) { return}
                } catch (e) {
                    console.log('login error', e);
                  } finally {}
            }
        } catch (e) {
            console.log('register error', e);
        } finally {}
        
      };

    
    const handler= () => {
        navigation.navigate('Login')
    }
    
    return ( 
        <View style={styles.loginBottom}>
            <View style={{...styles.from}}>
                <UsernameInput icon="user" text="username" name={username} setName={setUserName} />
                <Myinput icon="mail" text="useremail" name={email} setName={setEmail}/>  
                <Myinput icon="lock1" text="password" name={password} setName={setPassword} suffixIcon={true}/>                    
                <Myinput icon="lock1" text="confirmpassword" name={confirmPassword} setName={setConfirmPassword} suffixIcon={true}/> 
                {!checkPass && 
                    <View  >
                        <Text style={{...styles.text}}>
                            Password không đúng 
                        </Text>
                    </View>
                }
                <MyButton stylebtn={{...styles.btn_primary, marginTop:50, }} 
                    styleText={styles.text_primary} title='sign up' handler={handleRegister}/>  
            </View>
    
            <View style={{...styles.loginEnd, }}>
                <View  >
                    <Text style={{...styles.text}}>
                        Don't have account? 
                    </Text>
                </View>
                <TouchableOpacity onPress={handler}>
                    <Text style={styles.text_up}>
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default Register;