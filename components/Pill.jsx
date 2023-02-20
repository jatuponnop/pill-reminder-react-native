import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PillLine from './PillLine'
import { fontLight } from '../assets/fonts/fonts'
import { formatWhenName } from '../utils/utils'

const Pill = ({ pill: { name, amount, unit, when } }) => {
  return (
    <View>
      <View style={styles.pillWrapper}>
        <Image style={styles.img} source={require("../assets/images/pill.png")} />
        <View >
          <Text style={styles.pillTitle}>
            {name}
          </Text>
          <Text style={styles.pillSubtitle}>
            {amount} {unit}, {formatWhenName(when)}
          </Text>
        </View>
      </View>
      <PillLine />
    </View>
  )
}
export default Pill;

const styles = StyleSheet.create({
  img: {
    height: 36,
    width: 36,
    marginRight: 24
  },
  pillWrapper: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center"
  },
  pillTitle: {
    fontFamily: fontLight,
    fontSize: 16
  },
  pillSubtitle: {
    fontFamily: fontLight,
    fontSize: 14
  }
})
