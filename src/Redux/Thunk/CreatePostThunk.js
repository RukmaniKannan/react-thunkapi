import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Environment/Environment";

export const CreatePostUser = createAsyncThunk(
  "createPost/user",
  async ({ productName,categoryId,quantity,price,poultryId,breedId},{rejectWithValue}) => {
    const auth_Token = "BslogiKey " + localStorage.getItem("auth_token");
    try{

    const response = await axios({
      method: "POST",
      url: `${API_URL}/api/product/create`,
      data: {productName,categoryId,quantity,price,poultryId,breedId},
      headers: {
        Authorization: auth_Token,
      },
    });
    return response.data;
  }catch(err){
    if (err.response && err.response.data) {
      return rejectWithValue(err.response.data);
      console.log("err.response.data",err.response.data)
    } else {
      return rejectWithValue(err.message);
      console.log("err.message",err.message)
    }

  }
 });
