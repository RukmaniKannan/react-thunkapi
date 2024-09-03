import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const BASE_URL='http://101.53.155.156:8089/api/product/get/'

export const FetchGetUser = createAsyncThunk(
  "Fetchget/user",
  async (id) => {
    console.log("id",id)
    const auth_Token = "BslogiKey" + " " + localStorage.getItem("auth_token");
    const response = await axios({
      method: "GET",
      url: BASE_URL+id,
      headers: {
        Authorization: auth_Token,
      },
      
    });
    return response.data;
  }
);