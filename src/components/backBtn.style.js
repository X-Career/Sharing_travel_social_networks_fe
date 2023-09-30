import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
    backBtn: {
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999,
        top: SIZES.large,
        paddingStart:10
    }
})

export default styles;