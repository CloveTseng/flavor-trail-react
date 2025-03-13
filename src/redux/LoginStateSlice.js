import { createSlice } from "@reduxjs/toolkit";

const identity = [
  {
    userId: 1,
    uid: 'vDJJ4XDu8BQnTSbpRueedfOKVWg2'
  },
  {
    userId: 16,
    uid: 'QTMKlCfcFndoHtjRDThP0hcAiCl1'
  },
]

const LoginStateSlice = createSlice({
  name: 'loginState',
  initialState: {
    loginStatus: {
      uid: '',
      isLogin: false
    },
    identity
  },
  reducers: {
    setIsLogin: (state, action) => {
      const { uid, isLogin } = action.payload;
      state.loginStatus = {
        uid,
        isLogin
      };
    },
    setLogout: (state) => {
      state.loginStatus = {
        uid: '',
        isLogin: false
      };
    }
  }
})


export default LoginStateSlice.reducer;
export const { setIsLogin, setLogout } = LoginStateSlice.actions;