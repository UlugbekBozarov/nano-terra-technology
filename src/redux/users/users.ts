import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IUser = {
  userId: string;
  username: string;
  firstName: string;
  lastName?: string;
  password: string;
};

const initialState: IUser[] = [
  {
    userId: "dev",
    username: "dev",
    firstName: "Dev",
    password: "123456",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.push(action.payload);
    },
    editUser: (state, action: PayloadAction<IUser>) => {
      return state?.filter((user) => user?.userId !== action?.payload?.userId);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      const index = state?.findIndex(
        (user) => user?.userId === action?.payload
      );
      delete state[index];
    },
  },
});

const { actions, reducer: users } = userSlice;

export const { addUser, editUser, removeUser } = actions;

export default users;
