import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Pill from './Pill';
import { fontLight } from '../assets/fonts/fonts';
import colors from '../assets/config/colors';
import PillLine from './PillLine';
import { useNavigation } from "@react-navigation/native";

export default PillTime = ({ pillTime: { time, pills } }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <Text style={styles.title} >
        {time}
      </Text>
      <PillLine />
      {
        pills.map((pill) => (
          <TouchableOpacity key={pill.id} onPress={() => navigation.navigate({ name: "EditPill", params: pill })}>
            <Pill pill={pill} />
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18
  },
  title: {
    fontFamily: fontLight,
    fontSize: 22,
    color: colors.black
  }
});