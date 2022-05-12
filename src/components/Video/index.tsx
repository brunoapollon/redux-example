import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Container } from "./styles";

// import { Container } from './styles';

const Video: React.FC = () => {
  const { activeLesson, activeModule } = useAppSelector(
    (state) => state.modules
  );

  return (
    <Container>
      <strong>
        {" "}
        Módulo: {!!activeModule.title ? activeModule.title : "ainda n deu"}{" "}
      </strong>
      <span>
        {" "}
        Aula: {!!activeLesson.title ? activeLesson.title : "ainda n deu"}{" "}
      </span>
    </Container>
  );
};

export default Video;
