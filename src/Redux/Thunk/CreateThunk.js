// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { API_URL } from "../../Environment/Environment";
// import axios from "axios";

// export const CreateUser = createAsyncThunk(
//   "create/user",
//   async ({ userName, password, }) => {
//     const response = await axios({
//       method: "POST",
//       url: API_URL+"/auth/login",
//       data: { userName, password},
//     });
//     return response.data;
//   }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../Environment/Environment";



export const CreateUser = createAsyncThunk("create/user", async ({userName, password},{ rejectWithValue }) => {
  
  try {
    
    const response = await axios({
      method: "POST",
      url: API_URL+"/auth/login",
      data: { userName, password},
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


