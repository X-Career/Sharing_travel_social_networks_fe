import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/index';


const styles = StyleSheet.create({
    navigate: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    black: {
        height: 45,
        margin: 0,
        marginBottom: 20,
        color: 'red'
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        marginRight: 10
    }
});

export default styles