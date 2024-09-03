import { createSlice } from "@reduxjs/toolkit";
import { UpdateUser } from "../Thunk/UpdateThunk";

const UpdateSlice=createSlice({
    name:"userUpdate",
    initialState:{
        loading:false,
        error:null,
        data:[],
    },
    extraReducers(builder){
        builder.addCase(UpdateUser.pending,(state,action)=>{
            state.loading=true;
         });
        builder.addCase(UpdateUser.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;

        });
        builder.addCase(UpdateUser.rejected,(state,action)=>{
            state.error=action.error;
            state.loading=false;

        });

    },

});
export const UpdateReducer=UpdateSlice.reducer;