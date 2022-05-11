import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface IUser {
  name: string;
  userName: string;
}
interface IinitialState {
  user: IUser;
}

interface IUserpayload {
  name: string;
  userName: string;
}

const userLocalStorage = localStorage.getItem("@redux:user");

const userAuth: IUser = userLocalStorage
  ? JSON.parse(userLocalStorage)
  : ({} as IUser);

const initialState: IinitialState = {
  user: userAuth,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action: PayloadAction<IUserpayload>) {
      localStorage.setItem(
        "@redux:user",
        JSON.stringify({
          name: action.payload.name,
          userName: action.payload.userName,
        })
      );

      return {
        ...state,
        user: {
          name: action.payload.name,
          userName: action.payload.userName,
        },
      };
    },
    userLoggout(state, action: PayloadAction) {
      localStorage.removeItem("@redux:user");
      return {
        ...state,
        user: {
          name: "",
          userName: "",
        },
      };
    },
  },
});

export const { userLogin, userLoggout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
