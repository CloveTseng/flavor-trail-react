import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;

//demo預設帳號狀態
const identity = [
  {
    //法國地頭蛇
    userId: 1,
    uid: 'vDJJ4XDu8BQnTSbpRueedfOKVWg2',
  },
  {
    //美食橘貓咩嚕
    userId: 16,
    uid: 'QTMKlCfcFndoHtjRDThP0hcAiCl1',
  },
]

const LoginStateSlice = createSlice({
  name: 'loginState',
  initialState: {
    loginStatus: {
      uid: '',
      isLogin: false
    },
    identity,
    userInfo: {
      userId: '',
      nickname: '',
      foodApplications: []
    }
  },
  reducers: {
    setIsLogin: (state, action) => {
      const { uid, isLogin } = action.payload;
      state.loginStatus = {
        uid,
        isLogin
      };
    },
    setLoginIdentity: (state, action) => {
      const { userId, nickname, foodApplications } = action.payload;
      state.userInfo = {
        userId,
        nickname,
        foodApplications
      }
    },

    setLogout: (state) => {
      state.loginStatus = {
        uid: '',
        isLogin: false
      };
    },
  }
})

export const getLoginUserInfo = createAsyncThunk(
  'LoginState/getUserInfo',
  async (id, { dispatch }) => {
    try {
      const [userRes, applicationsRes] = await Promise.all([
        axios.get(`${VITE_BASE_URL}/users/${id}`),
        axios.get(`${VITE_BASE_URL}/applications`),
      ])
      const foodApplications = applicationsRes.data.filter(application => (application.userId === id));
      const userInfo = {
        userId: userRes.data.id,
        nickname: userRes.data.nickName,
        foodApplications
      }
      dispatch(setLoginIdentity(userInfo))
    } catch (error) {
      console.log(error);
    }
  }
)


export default LoginStateSlice.reducer;
export const { setIsLogin, setLoginIdentity, setLogout } = LoginStateSlice.actions;