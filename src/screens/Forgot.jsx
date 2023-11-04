import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { login } from '../redux/features/auth/userSlice';
import styles, {root} from '../components/LoginStyle';
import MyButton from '../components/LoginBtn';
import {Myinput, UsernameInput} from '../components';




const Forgot = () => {
    const dispatch = useDispatch();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    
    const navigation = useNavigation()

    const handleSend = async () => {
        console.log(username, email);

        
        // setUserName("")
        // setEmail("")
      };

    const handlerSignIn= () => {
        navigation.navigate('Login')
    }
    const handlerSignUp= () => {
        navigation.navigate('Register')
    }
    
    return ( 
        <View style={styles.loginBottom}>
            <View style={{...styles.from}}>
                <UsernameInput icon="user" text="username" name={username} setName={setUserName} />
                <Myinput icon="mail" text="email" name={email} setName={setEmail}/>                    
                
                <MyButton stylebtn={{...styles.btn_primary, marginTop:50, }} 
                    styleText={styles.text_primary} title='send' handler={handleSend}/>  
            </View>
    
            <View style={{...styles.loginEnd, }}>
                <View  >
                    <Text style={{...styles.text}}>
                        Don't have account? 
                    </Text>
                </View>
                <TouchableOpacity onPress={handlerSignUp}>
                    <Text style={styles.text_up}>
                        Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlerSignIn}>
                    <Text style={styles.text_up}>
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default Forgot;