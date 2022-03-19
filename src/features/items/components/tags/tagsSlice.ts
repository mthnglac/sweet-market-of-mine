import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TagsState } from "./tags.types";

const initialState: TagsState = {
  selections: [],
};

const tags = createSlice({
  name: "tags",
  initialState,
  reducers: {
    pushSelection: (state, action: PayloadAction<string>) => {
      state.selections.push(action.payload);
    },
    removeSelection: (state, action: PayloadAction<number>) => {
      state.selections.splice(action.payload, 1);
    },
    resetSelections: () => initialState,
  },
});

export const { pushSelection, removeSelection, resetSelections } = tags.actions;
export default tags.reducer;
