import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import testData from "../components/testData.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { item: testData },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.item.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: { id: nanoid(6), ...contact },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const contacts = state.item;
        const index = contacts.findIndex((task) => task.id === action.payload);
        contacts.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
