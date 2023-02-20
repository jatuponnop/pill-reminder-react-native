import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../assets/config/colors';
import AddButton from './AddButton';

export default BottomBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <AddButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: colors.white,
    width: "100%",
    height: 48,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: -1,
    borderColor: colors.line,
    borderWidth: 1,
  },
  hide: {
    width: 200,
    height: 48,
    position: "absolute",
    backgroundColor: colors.white,
    alignSelf: "center"
  }
});