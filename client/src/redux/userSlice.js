import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
  },
  reducers: {
    SetUser: (state, action) => {
        console.log("log in user slice" , action)
      state.user = action.payload;
    },
  },
});

export const { SetUser } = userSlice.actions;
export default userSlice.reducer;