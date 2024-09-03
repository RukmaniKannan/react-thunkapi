import { createSlice } from "@reduxjs/toolkit";
import { CategoryUser } from "../Thunk/CategoryThunk";

const CategorySlice=createSlice({
    name:"usercategory",
    initialState:{
        loading:false,
        error:null,
        data:[],
    },
    extraReducers(builder){
        builder.addCase(CategoryUser.pending,(state,action)=>{
            state.loading=true;
         });
        builder.addCase(CategoryUser.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;

        });
        builder.addCase(CategoryUser.rejected,(state,action)=>{
            state.error=action.error;
            state.loading=false;

        });

    },

});
export const CategoryReducer=CategorySlice.reducer;