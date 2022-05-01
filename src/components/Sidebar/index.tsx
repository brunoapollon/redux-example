import React from "react";

// import { Container } from './styles';

const modules = [
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
];

const Sidebar: React.FC = () => {
  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>{lesson.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
