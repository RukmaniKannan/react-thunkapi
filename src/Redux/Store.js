import { configureStore } from "@reduxjs/toolkit";
import { CreateUserReducer } from "./Slice/CreateSlice";
import { FetchReducer } from "./Slice/FetchSlice";
import { CategoryReducer } from "./Slice/CategoryFetchSlice";
import { PaultryReducer } from "./Slice/PoultryFetchSlice";
import { BreedReducer } from "./Slice/BreedFetchSlice";
import { CreatePostReducer } from "./Slice/CreatePostSlice";
import { FetchGetReducer } from "./Slice/FetchGetSlice";
import { DeleteReducer } from "./Slice/DeleteSlice";
import { UpdateReducer } from "./Slice/UpdateSlice";

const store = configureStore({
  reducer: {
    user: CreateUserReducer,
    fetch:FetchReducer,
    category:CategoryReducer,
    paultry:PaultryReducer,
    breed:BreedReducer,
    createPost:CreatePostReducer,
    FetchGet:FetchGetReducer,
    deleted:DeleteReducer,
    Updated:UpdateReducer,
    
  },
});
export default store;
