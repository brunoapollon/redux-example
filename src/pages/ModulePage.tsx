import React from "react";

import Video from "../components/Video";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../store/hooks";
import ButtonLogout from "../components/ButtonLogout";

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
      <ButtonLogout />
    </div>
  );
};

export default ModulePage;
