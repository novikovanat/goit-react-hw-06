import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { item: { contactId: null, name: "", contact: "" } },
  reducers: {
    addContact: {
      reducer(state, action) {
        return state.push(action.payload);
      },
      prepare(name, contact) {
        return { payload: { contactId: nanoid(), name, contact } };
      },
    },
  },
  deleteContact: {
    reducer(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
