import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
    editBtn: {
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999,
        top: SIZES.large,
        right: SIZES.large -10

    }
})
export default styles;