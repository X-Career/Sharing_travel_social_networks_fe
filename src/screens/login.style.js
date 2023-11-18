import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styleL = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBackground:{
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        flex: 2,
        justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    contentText1: {
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: COLORS.gray,
        textAlign: 'left',
        paddingLeft: 18
    },
    contentText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 40,
        color: COLORS.primary,
        textAlign: 'center'
        
    },
    body: {
        flex: 6
    },
    form: {
        flex: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signinBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default styleL;