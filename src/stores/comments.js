import axios from "../api/axios";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: [],
  adminComments: [],
  show: 0,
};

export const getCommentItems = createAsyncThunk("getComments", async () => {
  const { data } = await axios.get("/comments");

  return data;
});

export const createComment = createAsyncThunk("createComment", async (data) => {
  const postedData = await axios.post("/comments", data);

  return postedData.data;
});

export const updateComment = createAsyncThunk(
  "updateComment",
  async (data, thunkAPI) => {
    const adminComments = thunkAPI.getState().comments.adminComments;
    const updatedComment = adminComments.map((item) => {
      if (item.id !== data.id) return item;

      return (item = data);
    });

    return updatedComment;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    loadPrevComments: (state) => {
      state.show += 5;
    },
    deleteComment: (state, action) => {
      state.adminComments = action.payload;
    },
  },
  extraReducers: {
    [getCommentItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCommentItems.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.show += 5;
      state.isLoading = false;
    },
    [getCommentItems.rejected]: (state) => {
      state.isLoading = false;
    },
    [createComment.pending]: (state) => {
      state.isLoading = true;
    },
    [createComment.fulfilled]: (state, { payload }) => {
      // since json placeholder can't be updated i need to manipulate the id this way
      payload = {
        ...payload,
        id:
          state.adminComments.length <= 0
            ? 501
            : state.adminComments.at(-1).id + 1,
      };

      state.adminComments.push(payload);
      state.isLoading = false;
    },
    [createComment.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateComment.pending]: (state) => {
      state.isLoading = false;
    },
    [updateComment.fulfilled]: (state, { payload }) => {
      state.adminComments = payload;
      state.isLoading = false;
    },
    [updateComment.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loadPrevComments, deleteComment } = commentSlice.actions;

export default commentSlice.reducer;
