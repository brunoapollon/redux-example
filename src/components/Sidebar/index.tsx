import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useAppSelector } from "../store/hooks";
import { toggleLesson } from "../store/moduleSlice";

// import { Container } from './styles';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { modules } = useAppSelector((state) => state.modules);
  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <>
                <li key={lesson.id}>{lesson.title}</li>
                {/* <button
                  onClick={() => dispatch(toggleLesson({ module, lesson }))}
                >
                  Selecionar
                </button> */}
              </>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
