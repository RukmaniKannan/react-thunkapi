import { createSlice } from "@reduxjs/toolkit";
import { FetchUser } from "../Thunk/FetchThunk";

const FetchSlice=createSlice({
    name:"userfetch",
    initialState:{
        loading:false,
        error:null,
        data:[],
    },
    extraReducers(builder){
        builder.addCase(FetchUser.pending,(state,action)=>{
            state.loading=true;
         });
        builder.addCase(FetchUser.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;
        });
        builder.addCase(FetchUser.rejected,(state,action)=>{
            state.error=action.error;
            state.loading=false;
        });

    },

});
export const FetchReducer=FetchSlice.reducer;