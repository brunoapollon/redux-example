import React from "react";

import Video from "../components/Video";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../components/store/hooks";

const ModulePage: React.FC = () => {
  const { user } = useAppSelector((satte) => satte.user);

  return (
    <div>
      <nav>
        <h1>
          Bem vindo {user.name} belo username: {user.userName}
        </h1>
      </nav>
      <Video />
      <Sidebar />
    </div>
  );
};

export default ModulePage;
