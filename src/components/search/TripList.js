import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { SHADOWS } from '../../constants';
import { SIZES, SPACING, shadow } from '../../constants/theme';

const CARD_WIDTH = SIZES.width / 2 - (SPACING.l + SPACING.l / 2)
const CARD_HEIGHT = 220

const TripList = ({list}) => {
  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
            <TouchableOpacity key={item.id} style= {styles.cardContainer}>
          <View style={[styles.card, shadow.light]} >
            <View style={styles.imageBox}>
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.footer}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
            </View>
          </View>
            </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 30
    },
    cardContainer: {
        marginLeft: SPACING.l,
        marginBottom: SPACING.l,
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: '#fff',
        borderRadius: 16

    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: 'hidden'
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        resizeMode: 'cover'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
        marginLeft: 16,
    },
    titleBox: {
        flex: 1
    },
    title: {
        fontSize: SIZES.medium,
        fontWeight: 'bold',
        color: '#000'
    },
    location: {
        fontSize: SIZES.medium,
    }
})

export default TripList;
