import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/index';

const styleF = StyleSheet.create({
    container: {
        flex: 1
    },
    imgBackground: {
        flex: 1,
        justifyContent: 'center',
        
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    contentText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 34,
        color: COLORS.primary
    },
    form: {
        flex: 5,
        justifyContent: 'center'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }
})

export default styleF;