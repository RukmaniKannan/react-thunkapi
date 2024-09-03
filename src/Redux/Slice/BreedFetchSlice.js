import { createSlice } from "@reduxjs/toolkit";
import { BreedUser } from "../Thunk/BreedThunk";


const BreedSlice=createSlice({
    name:"userBreed",
    initialState:{
        loading:false,
        error:null,
        data:[],
    },
    extraReducers(builder){
        builder.addCase(BreedUser.pending,(state,action)=>{
            state.loading=true;
         });
        builder.addCase(BreedUser.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;

        });
        builder.addCase(BreedUser.rejected,(state,action)=>{
            state.error=action.error;
            state.loading=false;

        });

    },

});
export const BreedReducer=BreedSlice.reducer;