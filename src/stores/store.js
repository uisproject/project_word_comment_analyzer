import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./comments";

const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
});

export default store;
