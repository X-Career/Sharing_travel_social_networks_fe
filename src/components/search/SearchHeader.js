import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SPACING } from '../../constants/theme'

const SearchHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.l
    },
    mainTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black'
    },
    secondTitle: {
        fontSize: 32,
        color: 'black'

    }
})

export default SearchHeader