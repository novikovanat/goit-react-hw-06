import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import testData from "../testData.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { item: testData },
  reducers: {
    addContact: {
      reducer(state, action) {
        return state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { contactId: nanoid(), name: name, phoneNumber: number },
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
