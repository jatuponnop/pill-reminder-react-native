import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';
const pillsSlice = createSlice({
  name: "pills",
  initialState: [],
  reducers: {
    ADD_PILL: (state, action) => {
      let { name, time, amount, unit, when } = action.payload;
      let pill = {
        id: uuid(),
        name,
        time,
        amount,
        unit,
        when
      }
      return [...state, pill];
    },
    UPDATE_PILL: (state, action) => {
      let { id, name, time, amount, unit, when } = action.payload;
      return state.map((pill) => {
        if (pill.id == id) {
          return {
            id, name, time, amount, unit, when
          }
        } else {
          return {
            ...pill
          }
        }
      })
    },
    DELETE_PILL: (state, action) => {
      let id = action.payload;
      return state.filter((pill) => pill.id != id);
    },
    SET_PILLS: (state, action) => {
      return [...action.payload]
    },
  }
});

export const { ADD_PILL, SET_PILLS, UPDATE_PILL, DELETE_PILL } = pillsSlice.actions;
export default pillsSlice.reducer;
