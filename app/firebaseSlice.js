import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
};

const firebaseSlice = createSlice({
  name: "firebaseSlice",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   state.currentUser = action.payload;
    // },
  },
});

export const {} = firebaseSlice.actions;

export default firebaseSlice.reducer;
