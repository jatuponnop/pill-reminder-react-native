import { StyleSheet, Text, View } from 'react-native'
import { fontLight } from '../assets/fonts/fonts';
import colors from '../assets/config/colors';

const TitleTextField = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default TitleTextField;

const styles = StyleSheet.create({
  title: {
    fontFamily: fontLight,
    fontSize: 20,
    color: colors.black
  }
});
