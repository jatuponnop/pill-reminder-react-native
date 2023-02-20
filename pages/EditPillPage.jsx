import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import PillWrapper from "../components/PillWrapper"
import Navbar from '../components/Navbar'
import TextField from '../components/TextField'
import Button from '../components/Button'
import colors from '../assets/config/colors'
import DropdownField from '../components/DropdownField'
import TitleTextField from '../components/TitleTextField'
import { generateNumberTime } from '../utils/utils'
import { useDispatch } from 'react-redux'
import { DELETE_PILL, UPDATE_PILL } from '../redux/pills'
import { fontLight } from '../assets/fonts/fonts'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native'

const EditPillPage = ({ route }) => {
  const navigation = useNavigation();
  const pill = route.params;
  const [name, setName] = useState(pill.name);
  const [hour, setHour] = useState(pill.time.split(":")[0]);
  const [minute, setMinute] = useState(pill.time.split(":")[1]);
  const [amount, setAmount] = useState(pill.amount);
  const [unit, setUnit] = useState(pill.unit);
  const [when, setWhen] = useState(pill.when);

  const dispatch = useDispatch();

  const updatePill = async () => {
    if (name == "" || minute == "" || hour == "" || amount == "" || unit == "" || when == "") {
      alert("โปรดกรอกข้อมูลให้ครบถ้วน!")
      return;
    }
    let time = hour + ":" + minute;
    let obj = {
      id: pill.id, name, time, amount, unit, when
    }
    dispatch(UPDATE_PILL(obj));

    alert("อัพเดทข้อมูลเรียบร้อยแล้ว!")
  }

  const deletePill = async () => {
    dispatch(DELETE_PILL(pill.id));
    alert("ลบข้อมูลเรียบร้อยแล้ว!")
    navigation.navigate("Home");
  }
  useEffect(() => {
    setName(pill.name);
    setHour(pill.time.split(":")[0]);
    setMinute(pill.time.split(":")[1]);
    setAmount(pill.name);
    setUnit(pill.unit);
    setWhen(pill.when);
  }, []);

  return (
    <View style={styles.container} >
      <Navbar title={"แก้ไขแจ้งเตือนการกินยา"} />
      <PillWrapper>
        <View style={styles.space}></View>

        <TouchableOpacity onPress={deletePill} style={styles.touchIndex}>
          <View style={styles.deleteWrapper}>
            <Text style={styles.deletePillText}>ลบ</Text>
            <MaterialIcons name='delete-forever' size={20} color={colors.primary} />
          </View>
        </TouchableOpacity>
        <TitleTextField title={"ชื่อยา"} />
        <TextField setValue={setName} defaultValue={name} placeholder="ชื่อยา" />
        <TitleTextField title={"เวลา"} />
        <Row>
          <Col numRows={2} style={{ marginRight: 20 }}>
            <DropdownField
              items={generateNumberTime(0, 24)}
              placeholder='ชั่วโมง'
              onSelect={setHour}
              value={hour}
            />
          </Col>
          <View style={styles.timeDec}>
            <Text>:</Text>
          </View>
          <Col numRows={2}>
            <DropdownField
              items={generateNumberTime(0, 60)}
              placeholder='นาที'
              onSelect={setMinute}
              value={minute}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2} style={{ marginRight: 20 }}>
            <TextField title="จำนวน" setValue={setAmount} defaultValue={amount} placeholder="จำนวน" />
          </Col>
          <Col numRows={2}>
            <TextField
              title="หน่วย"
              placeholder="หน่วย"
              setValue={setUnit}
              defaultValue={unit}
              value={unit}
            />
          </Col>
        </Row>
        <TitleTextField title={"กินเมื่อ"} />
        <DropdownField
          items={[
            { label: "ก่อนอาหาร", value: "before-meal" },
            { label: "หลังอาหาร", value: "after-meal" },
            { label: "เมื่อไหร่ก็ได้", value: "anytime" }
          ]}
          placeholder='กินเมื่อไหร่'
          onSelect={setWhen}
          value={when}
        />
        <Button text={"แก้ไขการแจ้งเตือน"}
          onClick={updatePill}
        />
      </PillWrapper>
    </View>
  )
}
export default EditPillPage;

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)
const Col = ({ numRows, children, style = {} }) => {
  return (
    <View style={[styles[`${numRows}col`], style]}>{children}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

  },
  space: {
    marginTop: 20
  },
  timeFieldWrapper: {
  },
  timeField: {
    width: "50"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",

  },
  "1col": {
    flex: 1
  },
  "2col": {
    flex: 2
  },
  "3col": {
    flex: 3
  },
  "4col": {
    flex: 4
  },
  timeDec: {
    position: "absolute",
    alignSelf: "center",
    top: 20
  },
  deleteWrapper: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    position: "absolute"
  },
  deletePillText: {
    color: colors.primary,
    fontFamily: fontLight,
    fontSize: 20
  },
  touchIndex: {
    zIndex: 7,
    elevation: 7,
  }

});