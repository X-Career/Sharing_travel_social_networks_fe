import React, {  useState, useContext } from 'react';
import {View,Alert,} from 'react-native';

import {LoginContext } from './logincontext';
import {setSigin} from './actionLogin'

import styles from './styles';
import Mybtn from './components/button';
import MyInput from './components/input';

function Forgot() {
    // Biến toàn cục
    const [state, dispatch] = useContext(LoginContext)

    // Biến cục bộ
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    // Hàm xử lý
    const handlerForgot= () => {
        const users = state.users
        let user = users.find(user => user.username === name);
        if (user === undefined) {
            Alert.alert(` Sai tên đăng nhập`)
        } else if (user.email !== email) {
            Alert.alert(` Sai email`)
        } else {
            setName("")
            setEmail("")
        Alert.alert(`Gửi thành công tới email ${user.email}`)
        }
    }

    const handlerback= () => {dispatch(setSigin(1))}
    
    return ( 
        <View style={styles.loginBottom}>
            <View style={{...styles.from}}>
                    <MyInput icon="user" text="username" name={name} setName={setName}/>
                    <MyInput icon="mail" text="useremail" name={email} setName={setEmail}/>                    
                    <View style={styles.forgot}>
                    </View>
                    <Mybtn stylebtn={{...styles.btn_primary, marginTop:50, }} 
                        styleText={styles.text_primary} title='send' handler={handlerForgot}/>  
                    <Mybtn stylebtn={{...styles.btn_primary, marginTop:50, }} 
                        styleText={styles.text_primary} title='back' handler={handlerback}/>  
            </View>
        </View>
     );
}

export default Forgot;