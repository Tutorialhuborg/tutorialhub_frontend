import { createSlice } from "@reduxjs/toolkit";

export const profile = createSlice({
  name: "user profile",
  initialState: {
    value: {
      status: false,
      username: "",
      usertype: "",
      email: "",
    },
  },
  reducers: {
    updateUser: (state, action) => {
      state.value.username = action?.payload?.username;
      state.value.usertype = action?.payload?.usertype;
      state.value.email = action?.payload?.email;
      state.value.status = true;
    },

    clearProfile: (state) => {
      state.value.username = "";
      state.value.usertype = "";
      state.value.email = "";
      state.value.status = false;
    },
  },
});

export const { updateUser, clearProfile } = profile.actions;

export default profile.reducer;
