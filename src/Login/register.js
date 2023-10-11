import React, { useState, useContext } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';


import {LoginContext } from './logincontext';
import { setSigin } from './actionLogin';
import styles, {root} from './styles';
import Mybtn from './components/button';
import MyInput from './components/input';




function Register() {
    //biến toàn cục
    const [state, dispatch] = useContext(LoginContext)
    const users = state.users

     // biên cục bộ sử dụng trong route
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    
    const user = {}
    
    // Hàm xử lý xự kiện
    const handlerRegister= () => { 
        if (username === "" || email === "" || password === "" || confirmpassword === "" ) {
            Alert.alert('đề nghị khai báo đầy đủ thong tin')
        } else if (users.every(user => user.username === username)) {
                    Alert.alert('Tên đăng nhập đã tồn tại')
                } else if (users.every(user => user.email === email)) {
                        Alert.alert(`Email này đã được đăng ký `)
                    } else if (password !== confirmpassword) {
                            Alert.alert(` Nhập lại password`)
                        } else {
                            user.username = username
                            user.password = password
                            user.email = email
                            state.users = [...state.users, user]
                            setUsername("")
                            setEmail("")
                            setPassword("")
                            setConfirmpassword("")
                            Alert.alert(` Đăng ký thành công với tên ${user.username}, -  ${user.password}, - ${user.email}`)
                        }
    }

    const handler = () => {dispatch(setSigin(1))}

    // Hiển thị
    return ( 
        <View style={styles.loginBottom}>
            <View style={{...styles.from}}>
                <MyInput icon="user" text="username" name={username} setName={setUsername}/>
                <MyInput icon="mail" text="email@gmail.com" name={email} setName={setEmail}/>

                <MyInput icon="lock1" text="password" name={password} setName={setPassword} eyes/> 
                <MyInput icon="lock1" text="confirmpassword" name={confirmpassword} setName={setConfirmpassword} eyes/> 

                <Mybtn stylebtn={{...styles.btn_primary, marginTop:50, }} 
                    styleText={styles.text_primary} 
                    title='sign in' 
                    handler={handlerRegister}/>           
                
            </View>
    
            <View style={{...styles.loginEnd}}>
                <View>
                    <Text style={{...styles.text}}>
                        Already have an account
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