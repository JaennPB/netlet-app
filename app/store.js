import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    firestore: firestore,
  },
});

export default store;
