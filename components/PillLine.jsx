import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class PillLine extends Component {
  render() {
    return (
      <View style={styles.line} >
      </View>
    )
  }
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#EDEDED",
    marginTop: 14,
    marginBottom: 14
  }
});