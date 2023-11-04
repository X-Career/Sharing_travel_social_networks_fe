import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/index';


const styles = StyleSheet.create({
    navigate: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 20,
        paddingBottom: 10
    },
    black: {
        // backgroundColor: 'red',
        width: '15%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        width: '80%',
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.secondary,
        margin: 0,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: COLORS.secondary,
        margin: 0,
        fontSize: 15,
    },
    list: {

    },
    item: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 5
    },
    item_list: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    item_icon: {
        alignItems: 'center',
        position: 'absolute'
    },
    img: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        marginRight: 10
    },
    clear: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default styles