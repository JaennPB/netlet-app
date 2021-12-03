import { configureStore } from "@reduxjs/toolkit";

import firebaseSlice from "./firebaseSlice";

const store = configureStore({
  reducer: {
    firestore: firebaseSlice,
  },
});

export default store;
