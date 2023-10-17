import React, { Component, useState } from 'react';
import {View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {root} from './LoginStyle';
import MyIcon from './LoginIcon';

const Myinput = (props) => {
    
    const [eye, setEye] = useState(props.eyes);
    const type = eye ? true : false

    const hanldeEye = () => {
        setEye(!eye)
    }
    return (
        <View style={{...styles.input}}>
                    <View style={{...styles.icon, backgroundColor:"#fff"}}>
                    <Icon
                         name={props.icon} size={20}/>
                    </View>
                    <TextInput
                        style={styles.textinput}
                        secureTextEntry={type}
                        onChangeText={props.setName}
                        value={props.name}
                        placeholder={props.text}
                    />
                    { !props.eyes || <>
                        {eye ?
                        <MyIcon name="eye-slash" hanlder={hanldeEye}/>:
                        <MyIcon name="eye" hanlder={hanldeEye}/> 
                        }
                    </>
                    }
                </View>
    )
}

const styles = StyleSheet.create({
    input: { 
        flexDirection: "row", 
        alignItems: "center", 
        width:"80%",
        marginVertical: 20,
        paddingVertical:5,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: root.mainColor,
    },
    icon: { width:28, 
        height: 28, 
        borderRadius: 12, 
        backgroundColor: root.mainColor, 
        justifyContent: "center", 
        alignItems: "center",},
    logo: { marginHorizontal: 15},
    textinput: {
        flex:1,
        paddingLeft: 10,
        fontSize: 20,
        lineHeight:30,
    },

})
export default Myinput;