import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { SHADOWS, SIZES, SPACING } from '../../constants/theme';

const CARD_WIDTH = SIZES.width - 100
const CARD_HEIGHT = 200
const CARD_WIDTH_SPACING = CARD_WIDTH + SPACING.l

const TopCarousel = ({list}) => {
  return (
    <View>
      <FlatList
        snapToInterval={CARD_WIDTH_SPACING}
        decelerationRate= 'fast'
        horizontal
        data={list}
        key={i => i.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={{ marginLeft: SPACING.l, marginRight: index === list.length -1 ? SPACING.l : 0}}>
              <View style={[styles.card, SHADOWS.medium]}>
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.image}/>
                </View>
                <View style={styles.titleBox}>

                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10
  },
  imageContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    overflow: 'hidden'
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover'
  }, 
  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 90,
    left: 16
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: '#fff'
  },
  location: {
    fontSize: SIZES.large,
    color: '#fff'
  }
});

export default TopCarousel;
