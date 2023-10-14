import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        marginStart: -6
    },
    title: {
        fontFamily: 'Poppins-Medium',
        marginEnd: SIZES.xSmall,
        color: COLORS.black,
    },
    subTitle: {
        color: COLORS.gray2,
    }
})

export default styles;