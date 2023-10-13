import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topLayout: {
    flex: 2,
    backgroundColor: COLORS.primary,
    // paddingTop: 20,
  },
  paddingHorizontal: 20,
  topTitle: {
    flex: 1,
  },

  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    paddingTop: 20,
  },
  subTopLayout: {
    flex: 2,

    flexDirection: 'row',
  },
  radiusLeft: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    height: 120,
    alignSelf: 'flex-end',
  },
  radiusRight: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    height: 100,
    alignSelf: 'flex-end',
  },
  botLayout: {
    flex: 5,
    backgroundColor: COLORS.white,
  },
  Img: {
    flex: 1,
    position: 'absolute',
    top: -110,
    left: 110,
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 150,
    resizeMode: 'contain',
    borderWidth: 3,
    borderColor: COLORS.offwhite,
  
  },
  infoUser: {
    flex: 10,
    alignItems: 'center',
    marginTop: SIZES.xxLarge,
  },
  fullName: {
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.black,

  },
  email: {
    fontSize: SIZES.medium,
    textAlign: 'center',
    color: COLORS.black,
  },
  wrapper: {
    marginTop: 15,
    width: SIZES.width - 50,
  },
  longInput: {
    backgroundColor: COLORS.offwhite,
    // width: SIZES.width - 50,
    // height: 50,
    borderRadius: 10,
    paddingStart: 20,
  },
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  genderItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderText: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperShow: {
    marginTop: 15,
    width: SIZES.width - 50,
    borderRadius: 10,
    borderColor: COLORS.gray,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.offwhite,
    // marginHorizontal: 30,
    height: 60
    
  },
  birthText: {
    fontSize: SIZES.xxLarge - 4
  },
  btnPassword: { marginTop: 10 },
  wrapperDescription: {
    height: 150,
    padding: 6
  },
  desText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.black
  }
});

export default styles;
