import React, { Component, useState } from 'react';
import {View, Text, TextInput, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEye from 'react-native-vector-icons/FontAwesome';
import {root} from './LoginStyle';


const UsernameInput = (props) => {
    
    
    return (
        <View style={{...styles.input}}>
                    <View style={{...styles.icon, backgroundColor:"#fff"}}>
                    <Icon
                         name={props.icon} size={20}/>
                    </View>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={props.setName}
                        value={props.name}
                        placeholder={props.text}
                    />
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
export default UsernameInput;