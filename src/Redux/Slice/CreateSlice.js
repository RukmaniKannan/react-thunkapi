import { createSlice } from "@reduxjs/toolkit";
import { CreateUser } from "../Thunk/CreateThunk";

const CreateSlice = createSlice({
  name: "usercreate",
  initialState: {
    loading: false,
    data: [],
    error: [],
    
  },

  extraReducers(builder) {
    builder.addCase(CreateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(CreateUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading=false;

    });
    builder.addCase(CreateUser.rejected, (state, action) => {
      console.log(action.payload,"errr")
      state.error = action.payload;
      state.loading=false;

    });
  },
});

export const CreateUserReducer =  CreateSlice.reducer;