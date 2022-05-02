import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface ILesson {
  id: number;
  title: string;
}

interface IModule {
  id: number;
  title: string;
  lessons: ILesson[];
}
interface Ipayload {
  lesson: ILesson;
  module: IModule;
}

interface IinitialState {
  activeLesson: ILesson;
  activeModule: IModule;
  modules: IModule[];
}

const initialState: IinitialState = {
  activeLesson: { id: 0, title: "" },
  activeModule: { id: 0, title: "", lessons: [] },
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
};

export const moduleSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    toggleLesson: (state, action: PayloadAction<Ipayload>) => {
      return {
        ...state,
        activeLesson: action.payload.lesson,
        activeModule: action.payload.module,
      };
    },
  },
});

export const { toggleLesson } = moduleSlice.actions;

export const selectModule = (state: RootState) => state.modules.modules;

export default moduleSlice.reducer;
