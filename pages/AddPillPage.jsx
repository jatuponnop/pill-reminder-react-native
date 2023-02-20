import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import PillWrapper from "../components/PillWrapper"
import Navbar from '../components/Navbar'
import TextField from '../components/TextField'
import Button from '../components/Button'
import colors from '../assets/config/colors'
import DropdownField from '../components/DropdownField'
import TitleTextField from '../components/TitleTextField'
import { generateNumberTime } from '../utils/utils'
import { useDispatch } from 'react-redux'
import { ADD_PILL, SET_PILLS } from '../redux/pills'

const AddPillPage = () => {
  const [name, setName] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("เม็ด");
  const [when, setWhen] = useState("");

  const dispatch = useDispatch();

  const addPill = async () => {
    if (name == "" || minute == "" || hour == "" || amount == "" || unit == "" || when == "") {
      alert("โปรดกรอกข้อมูลให้ครบถ้วน!")
      return;
    }
    let time = hour + ":" + minute;
    let obj = {
      name, time, amount, unit, when
    }
    dispatch(ADD_PILL(obj));
    alert("เพิ่มข้อมูลเรียบร้อยแล้ว!")
  }
  return (
    <View style={styles.container} >

      <Navbar title={"เพิ่มแจ้งเตือนการกินยา"} />
      <PillWrapper>
        <View style={styles.space}></View>
        <TextField title="ชื่อยา" setValue={setName} placeholder="ชื่อยา" />
        <TitleTextField title={"เวลา"} />
        <Row>
          <Col numRows={2} style={{ marginRight: 20 }}>
            <DropdownField
              items={generateNumberTime(0, 24)}
              placeholder='ชั่วโมง'
              onSelect={setHour}
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
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2} style={{ marginRight: 20 }}>
            <TextField title="จำนวน" setValue={setAmount} placeholder="จำนวน" />
          </Col>
          <Col numRows={2}>
            <TextField
              title="หน่วย"
              placeholder="หน่วย"
              setValue={setUnit}
              defaultValue='เม็ด'
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
        />
        <Button text={"เพิ่มการแจ้งเตือน"}
          onClick={addPill}
        />
      </PillWrapper>
    </View>
  )
}
export default AddPillPage;

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
  }

});