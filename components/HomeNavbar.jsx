import { Image, StyleSheet, Text, View } from "react-native"
import colors from "../assets/config/colors";
import { fontMedium, fontRegular } from "../assets/fonts/fonts";
import { formatDateThaiFull } from "../utils/utils";

export default HomeNavbar = () => {
  return (
    <View style={styles.whiteBg} >
      <View style={styles.mainBg}>
        <View style={styles.wrapper}>
          <Text style={styles.date} >
            {formatDateThaiFull(new Date())}
          </Text>
          <Text style={styles.title} >
            สวัสดี! วันนี้เป็นไงบ้าง :)
          </Text>
          <Image
            source={require("../assets/images/nav-img.png")}
            style={styles.navImg}
          />
        </View>
      </View>
      <View style={styles.decWrapper}>
        <View style={styles.decoration} >
          <View style={styles.bottomDec}>
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
    marginRight: 24
  },
  date: {
    fontFamily: fontRegular,
    fontSize: 16,
    color: colors.white,
    marginTop: 42
  },
  title: {
    fontFamily: fontMedium,
    fontSize: 24,
    color: colors.white,
  },
  navImg: {
    width: 105,
    height: 105,
    position: "absolute",
    right: 0,
    marginTop: 14
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