import { configureStore } from "@reduxjs/toolkit";
import { moduleSlice } from "./moduleSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    modules: moduleSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
