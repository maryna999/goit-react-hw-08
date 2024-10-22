import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
      prepare(name) {
        return {
          payload: name,
        };
      },
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
