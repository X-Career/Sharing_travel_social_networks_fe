import React, { Component, useState } from 'react';
import {View, Text, TextInput, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEye from 'react-native-vector-icons/FontAwesome';
import {root} from './LoginStyle';


const Myinput = (props) => {
    
  const [secureTextEntry, setSecureTextEntry] = useState(true)
    
    return (
        <View style={{...styles.input}}>
                    <View style={{...styles.icon, backgroundColor:"#fff"}}>
                    <Icon
                         name={props.icon} size={20}/>
                    </View>
                    <TextInput
                        style={styles.textinput}
                        secureTextEntry={props.suffixIcon ? secureTextEntry : !secureTextEntry}
                        onChangeText={props.setName}
                        value={props.name}
                        placeholder={props.text}
                    />
                    {
                        props.suffixIcon == true ?
                        <TouchableOpacity 
                        onPress={() => setSecureTextEntry(state => !state)}
                        >
                          {
                            secureTextEntry ?
                            <IconEye name="eye-slash" size={20} color="#0072A5"/>
                            :
                            <IconEye name="eye" size={20} color="#0072A5"/>
                          }
                        </TouchableOpacity>
                        :
                        <></>
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