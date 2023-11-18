import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants'

const styleR = StyleSheet.create({
    container: {
        flex: 1
    },
    imgBackground: {
        flex: 2,
        justifyContent: 'center'
    },
    content: {
        flex :1 ,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    contentText: {
        fontFamily: 'Poppins-Bold',
        fontSize: SIZES.xxLarge,
        color: COLORS.primary
    },
    form: {
        flex:6,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styleR;