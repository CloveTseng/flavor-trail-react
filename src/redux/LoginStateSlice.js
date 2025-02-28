import { createSlice } from "@reduxjs/toolkit";

const LoginStateSlice = createSlice({
  name: 'loginState',
  initialState: {
    loginStatus: {
      uid: '',
      isLogin: false
    }
  },
  reducers: {
    setIsLogin: (state, action) => {
      const { uid, isLogin } = action.payload;
      state.loginStatus = {
        uid,
        isLogin
      };
    }
  }
})


export default LoginStateSlice.reducer;
export const { setIsLogin } = LoginStateSlice.actions;