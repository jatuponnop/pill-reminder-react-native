import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import colors from '../assets/config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <View style={styles.hide}>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("AddPill")}>
          <View style={styles.button}>
            <FontAwesome name='plus' size={40} color={colors.white} />
          </View>
        </TouchableOpacity>
      </View>
    </View >
  )
}
export default AddButton;

const styles = StyleSheet.create({
  container: {
  },
  buttonWrapper: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 100,
    position: "absolute",
    bottom: -50,
    borderWidth: 1,
    borderColor: colors.line,
    alignSelf: "center"
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 35,
    alignSelf: "center",
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hide: {
    width: 200,
    height: 48,
    backgroundColor: colors.white,
    alignSelf: "center",
    position: "absolute",
    bottom: 1
  },
});