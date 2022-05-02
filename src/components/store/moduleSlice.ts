import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

export const moduleSlice = createSlice({
  name: "modules",
  initialState: {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
        id: 1,
        title: "Estudando React",
        lessons: [
          { id: 1, title: "Primeira aula" },
          { id: 2, title: "Segunda aula" },
        ],
      },
      {
        id: 2,
        title: "Estudando React com redux",
        lessons: [
          { id: 3, title: "Terceira aula" },
          { id: 4, title: "Quarta aula" },
        ],
      },
    ],
  },
  reducers: {
    toggleLesson: (state, { payload }) => {
      const { activeLesson, activeModule, modules } = state;

      console.log(state, payload);

      return {
        activeLesson,
        activeModule,
        modules,
      };
    },
  },
});

export const { toggleLesson } = moduleSlice.actions;

export const selectModule = (state: RootState) => state.modules.modules;

export default moduleSlice.reducer;
