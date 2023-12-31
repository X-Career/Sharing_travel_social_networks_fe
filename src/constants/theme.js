import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const COLORS = {
    primary: '#077cff',
    secondary: '#DDF0FF',
    tertiary: '#FF7754',

    gray: '#83829A',
    gray2: '#C1C0C8',

    offwhite: '#F3F4F8',
    white: '#FFFFFF',
    black: '#000000',
    red: '#E81E4D',
    green: '#00c135',
    lightWhite: '#FAFAFC',
}
const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
}

const SPACING = {
    s: 8,
    m: 18,
    l: 24,
    xl: 40,
  };

const SHADOWS = {
    small: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};
 const shadow = {
    light: {
      shadowColor: '#000',
      shadowRadius: 4,
      shadowOpacity: 0.1,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    dark: {
      shadowColor: '#000',
      shadowRadius: 4,
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
  };

export { COLORS, SIZES, SHADOWS, SPACING, shadow}