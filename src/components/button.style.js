import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../constants';

const styles = StyleSheet.create({
    btnStyle:(widthBtn) =>( {
        height: 50,
        width: SIZES.width - (widthBtn || 60),
        marginVertical: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    }),
    btnTxt: {
        fontFamily: 'Poppins-Bold',
        color: COLORS.white,
        fontSize: 18,
    },
})
export default styles;