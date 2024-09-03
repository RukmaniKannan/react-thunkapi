import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../Environment/Environment";
import axios from "axios";

export const FetchUser = createAsyncThunk(
  "Fetch/user",
  async () => {
    const auth_Token = "BslogiKey" + " " + localStorage.getItem("auth_token");
    const response = await axios({
      method: "GET",
      url: API_URL+"/api/product/get",
      headers: {
        Authorization: auth_Token,
      },
      
    });
    return response.data;
  }
);