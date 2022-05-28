import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabIndex: 0,
};

const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setTabIndex: (state, { payload }) => {
      state.tabIndex = payload;
    },
  },
});

export const { setTabIndex } = tabSlice.actions;

export default tabSlice.reducer;
