import React, { Component } from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {root} from '../styles'

function MyButton(porps) {
const handler = () => {
    porps.handler()
}
const stylesbtn = [styles.btn, porps.stylebtn]
const stylestext = [styles.textBtn, porps.styleText]
    return ( 
            <TouchableOpacity  
                style={stylesbtn}
                onPress={handler}>
                <Text style={stylestext}>
                    {porps.title}
                </Text>
            </TouchableOpacity>
         );
}

const styles = StyleSheet.create({
    btn: {width: '80%', 
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: root.mainColor, 
        
        borderRadius: 50, 
        justifyContent: "center", 
        alignItems: "center", 
        paddingVertical: 10, 
        marginVertical:10,
        backgroundColor: 'white',},
    textBtn: {fontSize: 20, fontWeight: 'bold',
        textTransform: 'uppercase', 
        color: root.mainColor,
        },

})
export default MyButton;