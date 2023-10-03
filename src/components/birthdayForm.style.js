import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewBtn: {
        width: SIZES.width - 200
    },
    btn: {
        borderRadius: SIZES.small
    },
    text: {
        textAlign: 'center',
        fontSize: SIZES.xLarge - 2,
        fontFamily: 'Poppins-SemiBold',
        marginTop: 2,
        color: COLORS.gray

    }
})

export default styles;