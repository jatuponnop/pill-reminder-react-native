import moment from "moment"
require("core-js/actual/array/group-by-to-map");
require("core-js/actual/array/group-by");

export const generateNumberList = (min, max) => {
  let items = []
  for (let i = min; i <= max; i++) {
    items.push(i);
  }
  return items;
}

export const generateNumberTime = (min, max) => {
  let items = []
  for (let i = min; i <= max; i++) {
    let msg = "";
    if (i < 10) {
      msg = "0" + i;
    } else {
      msg = i + "";
    }
    let obj = {
      label: msg,
      value: msg
    }
    items.push(obj);
  }
  return items;
}

export const formatWhenName = (when) => {
  if (when == "after-meal") {
    return "หลังอาหาร"
  } else if (when == "before-meal") {
    return "ก่อนอาหาร"
  } else if (when == "anytime") {
    return "เมื่อไหร่ก็ได้"
  } else {
    return "-";
  }
}

export const sortPillTimes = (pillTimes) => {
  let compare = (a, b) => {
    let aTime = getPillTimeMinute(a.time);
    let bTime = getPillTimeMinute(b.time);
    if (aTime < bTime) {
      return -1;
    } else {
      return 1;
    }
  }
  let sorted = pillTimes.sort(compare);
  return sorted
}
export const getPillTimeMinute = (time) => {
  let split = time.split(":");
  let hour = parseInt(split[0]);
  let minute = parseInt(split[1]);
  return (hour * 60) + minute;
}

export const monthTextFull = (monthNumber) => {
  if (monthNumber == 1) {
    return "มกราคม";
  } else if (monthNumber == 2) {
    return "กุมภาพันธ์";
  } else if (monthNumber == 3) {
    return "มีนาคม";
  } else if (monthNumber == 4) {
    return "เมษายน";
  } else if (monthNumber == 5) {
    return "พฤษภาคม";
  } else if (monthNumber == 6) {
    return "มิถุนายน";
  } else if (monthNumber == 7) {
    return "กรกฎาคม";
  } else if (monthNumber == 8) {
    return "สิงหาคม";
  } else if (monthNumber == 9) {
    return "กันยายน";
  } else if (monthNumber == 10) {
    return "ตุลาคม";
  } else if (monthNumber == 11) {
    return "พฤศจิกายน";
  } else if (monthNumber == 12) {
    return "ธันวาคม";
  }
  return "";

}

export const formatDateThaiFull = (date) => {
  let m = moment(date).format("MM");
  let y = parseInt(moment(date).format("YYYY")) + 543;
  let d = parseInt(moment(date).format("DD"));
  let format = moment(date).format(d + " " + monthTextFull(m) + " " + y);
  return format;
}

export const toPillTimes = (pills) => {
  let grouped = pills.groupBy((pill) => {
    return pill.time;
  })
  let pillTimes = [];
  for (let [time, pills] of Object.entries(grouped)) {
    pillTimes.push({ time, pills });
  }
  let sorted = sortPillTimes(pillTimes);
  return sorted;
} 