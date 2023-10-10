import { StyleSheet } from 'react-native';
import { SIZES } from '../constants';

const styles = StyleSheet.create({
    changeBtn: {
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1000,
        right: SIZES.xSmall,
        bottom: 6,
    }
})

export default styles;