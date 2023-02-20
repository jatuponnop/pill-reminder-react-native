import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import colors from "../assets/config/colors";
import { fontMedium } from "../assets/fonts/fonts";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native";

export default Navbar = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.whiteBg} >

      <View style={styles.mainBg}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
          >

            <View style={styles.iconWrapper}>
              <Ionicons name="ios-chevron-back" size={32} color={colors.white} />
            </View>
          </TouchableOpacity>
          <Text style={styles.title} >
            {title}
          </Text>
        </View>
        <View style={styles.decWrapper}>
          <View style={styles.decoration} >
            <View style={styles.bottomDec}>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  whiteBg: {
    backgroundColor: colors.white
  },
  mainBg: {
    backgroundColor: colors.primary,
    height: 125,
    borderBottomRightRadius: 30
  },
  wrapper: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 50,
    justifyContent: "center"
  },
  title: {
    fontFamily: fontMedium,
    fontSize: 24,
    color: colors.white,
    alignSelf: "center"
  },
  iconWrapper: {
    position: "absolute",
    left: -6
  },
  decWrapper: {
    position: "absolute",
    bottom: -80
  },
  decoration: {
    width: 70,
    height: 80,
    backgroundColor: colors.primary
  },
  bottomDec: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    height: 80,
    marginBottom: 60,
  },
});