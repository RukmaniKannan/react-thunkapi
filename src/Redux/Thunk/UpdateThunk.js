import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://101.53.155.156:8089/api/product/update'
export const UpdateUser = createAsyncThunk(
  "Update/user",
  async ({ id, productName, categoryId, quantity, price, poultryId, breedId }) => {
    
    const auth_Token = "BslogiKey" + " " + localStorage.getItem("auth_token");
    const response = await axios({
      method: "PUT",
      url:BASE_URL ,
      data:{ id, productName, categoryId, quantity, price, poultryId, breedId },
      headers: {
        Authorization: auth_Token,
      },
      
    });
    return response.data;
  }
);