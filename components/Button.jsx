import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../assets/config/colors";
import { fontLight } from "../assets/fonts/fonts";

const Button = ({ text, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.btn}>
        <Text style={styles.btnText} >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 10,
    borderRadius: 8
  },
  btnText: {
    fontFamily: fontLight,
    fontSize: 20,
    color: colors.white
  }
});