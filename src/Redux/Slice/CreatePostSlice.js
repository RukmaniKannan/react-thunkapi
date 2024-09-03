import { createSlice } from "@reduxjs/toolkit";
import { CreatePostUser } from "../Thunk/CreatePostThunk";

const CreatePostSlice = createSlice({
  name: "usercreatePost",
  initialState: {
    loading: false,
    data: [],
    error: [],
    
  },
  reducers: {
    resetState(state) {
      state.data = null;
      state.error = null;
      
      
    },
  },

  extraReducers(builder) {
    builder.addCase(CreatePostUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(CreatePostUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading=false;

    });
    builder.addCase(CreatePostUser.rejected, (state, action) => {
      state.error = action.payload;
      console.log(" action.payload", action.payload)
      state.loading=false;

    });
  },
});
export const { resetState } = CreatePostSlice.actions;
export const CreatePostReducer =  CreatePostSlice.reducer;