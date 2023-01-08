import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    value: [],
    filtered: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.value.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        color: action.payload.convertedColor,
      });
    },
    fiteredNotes: (state, action) => {
      state.filtered = action.payload;
    },
    deleteNotes: (state, action) => {
      state.value = state.value.filter(
        (item) => item.id !== action.payload.item.id
      );
    },
  },
});

export const { addNote, fiteredNotes, deleteNotes } = noteSlice.actions;
export default noteSlice.reducer;
