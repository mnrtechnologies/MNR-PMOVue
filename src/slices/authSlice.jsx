import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signinData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSigninData(state, value) {
      state.signinData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSigninData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
