import React, {  useState, useContext } from 'react';
import {View, Text} from 'react-native';

import { LoginContext } from './logincontext';

import styles from './styles';

import Welcomes from './welcome';
import Logins from './login';
import Register from './register';
import Forgot from './forgot';

function Sigin() {
    const [state,dispatch] = useContext(LoginContext)

    const Title = () => {
        switch(state.checkLogin) {
            case 0:
                return <Text style={{...styles.textTilte}}>welcome back</Text>
            case 1: 
                return <Text style={{...styles.textTilte}}>hello sigin in</Text>
            case 2: 
                return <Text style={{...styles.textTilte}}>create your account</Text>
            case 3: 
                return <Text style={{...styles.textTilte}}>create your account</Text>
            default:
                throw new Error("Invalid")
        }
    }

    const Container = () => {
        switch(state.checkLogin) {
            case 0:
                return <Welcomes/>
            case 1: 
                return <Logins/>
            case 2: 
                return <Register/>
            case 3: 
                return <Forgot/>
            default:
                throw new Error("Invalid")
        }
    }

    
    return ( 
        <View style={{...styles.login}}>
            <View style={{...styles.loginTop}}>
                <Title/>
                
                {/* <View styles={styles.layout1}></View> */}
            </View>
            

            <View style={styles.loginBottom}>
                <Container/>
            </View>
            
        </View>
     );
}

export default Sigin;