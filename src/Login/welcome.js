import React, { useContext } from 'react';
import {View, Text, Alert} from 'react-native';

import { LoginContext } from './logincontext';
import {setSigin, setSigup} from './actionLogin'
import styles from './styles';
import Mybtn from './components/button';
import MyIcon from './components/icon';



function welcome() {
    const [state, dispatch] = useContext(LoginContext)

    const hanlderInstagram = () => {
        Alert.alert("Liên kết với instagram")
    }
    const hanlderTwitter = () => {
        Alert.alert("Liên kết với Twitter")
    }
    const hanlderFacebook = () => {
        Alert.alert("Liên kết với Facebook")
    }
    const handlerSign = () => {
         dispatch(setSigin(1))
    }
    const handlerSigup = () => {
        dispatch(setSigin(2))

    }

    return ( 
        <>
            <View style={{...styles.loginContainer}}>
                <Mybtn  title='sign in' handler={handlerSign}/>
                <Mybtn stylebtn={styles.btn_primary} styleText={styles.text_primary} title='sign up' handler={handlerSigup}/>           
            </View>
    
            <View style={{...styles.welcomeEnd}}>
                <View style={styles.loginEndText} >
                    <Text style={{...styles.text}}>
                        Login with Social Media
                    </Text>
                </View>
                <View style={{...styles.loginLogo}}>
                    <MyIcon name="instagram" handler={hanlderInstagram}/>
                    <MyIcon name="twitter" handler={hanlderTwitter}/>
                    <MyIcon name="facebook" handler={hanlderFacebook}/>
                </View>
            </View>
        </>
     );
}

export default welcome;