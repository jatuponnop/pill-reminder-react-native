import { StyleSheet, Text, TextInput, View } from 'react-native'
import { fontLight } from '../assets/fonts/fonts';
import colors from '../assets/config/colors';

const TextField = ({ title = "", setValue, fieldStyle = {}, placeholder = "", defaultValue = "" }) => {
  return (
    title == "" ? (
      <TextInput
        style={[styles.input, fieldStyle]}
        onChangeText={setValue}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    ) : (
      <View>
        {title == "" ? "" : (
          <Text style={styles.title} >{title}</Text>
        )}

        <TextInput
          style={[styles.input, fieldStyle]}
          onChangeText={setValue}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </View>
    )

  )
}

export default TextField;

const styles = StyleSheet.create({
  title: {
    fontFamily: fontLight,
    fontSize: 20,
    color: colors.black,
  },
  input: {
    fontSize: 16,
    color: colors.input,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 10,
    marginBottom: 18,
    fontFamily: fontLight
  }
});