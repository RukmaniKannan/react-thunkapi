import { createSlice } from "@reduxjs/toolkit";
import { PaultryUser } from "../Thunk/PoultryThunk";

const PaultrySlice=createSlice({
    name:"userPaultry",
    initialState:{
        loading:false,
        error:null,
        data:[],
    },
    extraReducers(builder){
        builder.addCase(PaultryUser.pending,(state,action)=>{
            state.loading=true;
         });
        builder.addCase(PaultryUser.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;

        });
        builder.addCase(PaultryUser.rejected,(state,action)=>{
            state.error=action.error;
            state.loading=false;

        });

    },

});
export const PaultryReducer=PaultrySlice.reducer;