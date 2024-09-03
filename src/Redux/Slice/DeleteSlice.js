import { createSlice } from "@reduxjs/toolkit";
import { DeleteUser } from "../Thunk/DeleteThunk";

const DeleteSlice=createSlice({
    name:"userDelete",
    initialState:{
        loading:false,
        error1:[],
        data:[],
    },
    extraReducers(builder){
        builder.addCase(DeleteUser.pending,(state,action)=>{
            state.loading=true;
         });
        builder.addCase(DeleteUser.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;

        });
        builder.addCase(DeleteUser.rejected,(state,action)=>{
            console.log(action.payload,"rt");           
            state.error1=action.payload;
            state.loading=false;

        });
        // builder.addCase('userDelete/resetError', (state) => {
        //     state.error1 = null;
        //   });

    },

});
// export const resetDeleteError = () => ({ type: 'userDelete/resetError' });

export const DeleteReducer=DeleteSlice.reducer;