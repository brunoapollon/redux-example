import React from "react";

import Video from "../../components/Video";
import Sidebar from "../../components/Sidebar";
import { useAppSelector } from "../../store/hooks";
import ButtonLogout from "../../components/ButtonLogout";
import { Container } from "./styles";

const ModulePage: React.FC = () => {
  const { user } = useAppSelector((satte) => satte.user);

  return (
    <Container>
      <nav>
        <h1>
          Bem vindo {user.name}!! <br />
          belo username: {user.userName}
        </h1>
      </nav>
      <div>
        <Video />
        <Sidebar />
        <ButtonLogout />
      </div>
    </Container>
  );
};

export default ModulePage;
