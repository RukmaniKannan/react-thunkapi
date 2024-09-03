import { createSlice } from "@reduxjs/toolkit";
import { FetchGetUser } from "../Thunk/FetchGetThunk";


const FetchgetSlice=createSlice({
    name:"userfetchget",
    initialState:{
        loading:false,
        error:null,
        data:[],
    },
    extraReducers(builder){
        builder.addCase(FetchGetUser.pending,(state,action)=>{
            state.loading=true;
         });
        builder.addCase(FetchGetUser.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;

        });
        builder.addCase(FetchGetUser.rejected,(state,action)=>{
            state.error=action.error;
            state.loading=false;

        });

    },

});
export const FetchGetReducer=FetchgetSlice.reducer;