import React, { Component } from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {root} from './LoginStyle'

function MyIcon(porps) {
const handler = () => {
    porps.handler()
}

    return ( 
        <TouchableOpacity 
            style={styles.logo}
            onPress={handler}
        >
            <View style={styles.icon}>
                <Icon name={porps.name} color="#fff" size={23} />
            </View>
        </TouchableOpacity>
         );
}

const styles = StyleSheet.create({
    icon: { width:28, 
        height: 28, 
        borderRadius: 12, 
        backgroundColor: root.mainColor, 
        justifyContent: "center", 
        alignItems: "center",},
    logo: { marginHorizontal: 15}

})
export default MyIcon;