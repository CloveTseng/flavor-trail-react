import { createSlice } from "@reduxjs/toolkit";

//demo預設帳號狀態
const identity = [
  {
    //法坨地頭蛇
    userId: 1,
    uid: 'vDJJ4XDu8BQnTSbpRueedfOKVWg2',
    foodApplications: [
      {
        id: 7,
        postId: 2,
        status: "待回覆",
      },
      {
        id: 8,
        postId: 12,
        status: "已同意",
      },
      {
        id: 9,
        postId: 9,
        status: "已同意",
      },
    ]
  },
  {
    //美食橘貓咩嚕
    userId: 16,
    uid: 'QTMKlCfcFndoHtjRDThP0hcAiCl1',
    foodApplications: [
      {
        id: 1,
        postId: 15,
        status: "已同意",
      },
    ]
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
    },
    addFoodApplication: (state, action) => {
      const { userId, postId } = action.payload;
      state.identity.forEach(data => {
        if (data.userId == userId) {
          data.foodApplications.push({
            postId,
            status: "待回覆",
          })
        }
      })
      // console.log('add結果', state);
    },
  }
})


export default LoginStateSlice.reducer;
export const { setIsLogin, setLogout, addFoodApplication } = LoginStateSlice.actions;