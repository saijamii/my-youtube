import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchSlice,
  },
});

export default store;
