import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface IinitialState {
  user: {
    name: string;
    userName: string;
  };
}

interface IUserpayload {
  name: string;
  userName: string;
}

const initialState: IinitialState = {
  user: {
    name: "",
    userName: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action: PayloadAction<IUserpayload>) {
      return {
        ...state,
        user: {
          name: action.payload.name,
          userName: action.payload.userName,
        },
      };
    },
  },
});

export const { userLogin } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
