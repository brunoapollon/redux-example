import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleLesson } from "../../store/moduleSlice";
import { Content } from "./styles";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { modules } = useAppSelector((state) => state.modules);
  return (
    <aside>
      {modules.map((module) => (
        <Content key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                <p>{lesson.title}</p>
                <button
                  onClick={() => dispatch(toggleLesson({ module, lesson }))}
                >
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </Content>
      ))}
    </aside>
  );
};

export default Sidebar;
