import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import HomeNavbar from "../components/HomeNavbar"
import PillWrapper from "../components/PillWrapper"
import PillTime from "../components/PillTime"
import BottomBar from "../components/BottomBar"
import { useSelector } from "react-redux"
import colors from "../assets/config/colors"
import { toPillTimes } from "../utils/utils"

export default Home = () => {
  const pillTimes = toPillTimes(useSelector((state) => state.pills));
  return (
    <View style={styles.container}>
      <HomeNavbar />
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <PillWrapper>
          {pillTimes.map((pillTime, index) => (
            <PillTime key={pillTime.time} pillTime={pillTime} />
          ))}
        </PillWrapper>
      </ScrollView>
      <BottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});