import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES, SPACING } from '../../constants/theme'

const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={buttonTitle} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: SPACING.l,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: 'bold'
    },
   
})

export default SectionHeader