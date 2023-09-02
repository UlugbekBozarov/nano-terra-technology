import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { STORAGE_NAMES } from "constants/Storage.constants";
import { IUser } from "redux/users";
import { jwtEncode } from "services/jwt";
import { getItemCookie, setItemCookie } from "services/storage";

const loginSlice = createSlice({
  name: "isLogin",
  initialState: !!getItemCookie(STORAGE_NAMES.authorization),
  reducers: {
    signIn(state, action: PayloadAction<IUser>) {
      setItemCookie(STORAGE_NAMES.authorization, jwtEncode(action?.payload));
      setItemCookie(STORAGE_NAMES.user, action?.payload);
      setTimeout(() => {
        window.location.href = "/";
      }, 0);
      return true;
    },
    signOut() {
      setItemCookie(STORAGE_NAMES.authorization, "");
      setItemCookie(STORAGE_NAMES.user, "");
      setTimeout(() => {
        window.location.href = "/";
      }, 0);
      return false;
    },
  },
});

const { actions, reducer: isLogin } = loginSlice;

export const { signIn, signOut } = actions;

export default isLogin;
