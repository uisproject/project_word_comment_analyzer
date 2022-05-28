import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./comments";
import tabReducer from "./tabs";

const store = configureStore({
  reducer: {
    comments: commentReducer,
    tabs: tabReducer,
  },
});

export default store;
