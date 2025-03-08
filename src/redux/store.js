import { configureStore } from "@reduxjs/toolkit";

import loginStateSlice from "./LoginStateSlice";

const store = configureStore({
  reducer: {
    loginSlice: loginStateSlice
  }
})

export default store;