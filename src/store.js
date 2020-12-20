import { configureStore } from "@reduxjs/toolkit";

import bandsReducer from "./features/bands/bandsSlice";

const store = configureStore({
  reducer: {
    bands: bandsReducer,
  },
});

export default store;
