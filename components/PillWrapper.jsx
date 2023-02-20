import { View, StyleSheet } from "react-native"

export default PillWrapper = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 60
  },
});