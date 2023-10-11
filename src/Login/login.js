import React, {  useState, useContext } from 'react';
import {View, Text, TouchableOpacity, Alert,} from 'react-native';


import styles, {root} from './styles';
import Mybtn from './components/button';
import MyInput from './components/input';
import {LoginContext } from './logincontext';
import {setSigin} from './actionLogin'




function Login() {
    const [state, dispatch] = useContext(LoginContext)
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const handlerLogin= () => {
        const users = state.users
        let user = users.find(user => user.username === name);
        // Alert.alert(`dang nhap thanh cong ${user.username} va password ${user.password}`)
        if (user === undefined) {
            Alert.alert(` Sai tên đăng nhập`)
        } else if (user.password !== password) {
            Alert.alert(` Sai password`)
        } else {
            setName("")
            setPassword("")
        Alert.alert(`Đăng nhập thành công ${user.username} và ${user.password}`)
        }
    }

    const handlerpasswod= () => {
        dispatch(setSigin(3))
    }
    const handler= () => {dispatch(setSigin(2))}
    
    return ( 
        <View style={styles.loginBottom}>
            <View style={{...styles.from}}>
                    <MyInput icon="user" text="username" name={name} setName={setName}/>
                    <MyInput icon="lock1" text="password" name={password} setName={setPassword} eyes/>                    
                    <View style={styles.forgot}>
                        <TouchableOpacity onPress={handlerpasswod} >
                            <Text style={{...styles.text,color: root.mainColor,}}>
                                Forgot passwword?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Mybtn stylebtn={{...styles.btn_primary, marginTop:50, }} 
                        styleText={styles.text_primary} title='sign in' handler={handlerLogin}/>  
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