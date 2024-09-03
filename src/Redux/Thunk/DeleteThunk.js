import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://101.53.155.156:8089/api/product/delete/";
export const DeleteUser = createAsyncThunk("Delete/user", async (id,{ rejectWithValue }) => {
  console.log("id", id);
  try {
    const auth_Token = "BslogiKey" + " " + localStorage.getItem("auth_token");
    const response = await axios({
      method: "DELETE",
      url: BASE_URL + id,

      headers: {
        Authorization: auth_Token,
      },
    });
    console.log("response", response);
    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return rejectWithValue(err.response.data);
    } else {
      return rejectWithValue(err.message);
    }
  }
});
