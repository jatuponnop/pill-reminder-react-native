import { StyleSheet } from "react-native"
import { fontLight } from "../assets/fonts/fonts";
import colors from "../assets/config/colors";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";

const DropdownField = ({ items, value = "", onSelect, placeholder = "" }) => {
  const [open, setOpen] = useState(false);
  const [val, setValue] = useState("");
  const [itemList, setItems] = useState(items);

  useEffect(() => {
    setValue(value);
  }, []);
  return (
    <DropDownPicker
      open={open}
      value={val}
      items={itemList}
      setOpen={setOpen}
      setValue={(val) => { setValue(val); if (onSelect != null) onSelect(val); }}
      setItems={setItems}
      style={styles.input}
      textStyle={{
        fontSize: 16,
        fontFamily: fontLight
      }}
      placeholder={placeholder == "" ? "โปรดเลือก" : placeholder}
    />
  )
}

export default DropdownField;

const styles = StyleSheet.create({
  input: {
    color: colors.input,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 6,
    marginBottom: 18,
  }
});