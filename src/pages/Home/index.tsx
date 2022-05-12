import React from "react";
import ButtonLogout from "../../components/ButtonLogout";
import { useAppSelector } from "../../store/hooks";

// import { Container } from './styles';

const Home: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div>
      <h1>O NOME DA FERA É: {user.name}</h1>
      <h1>E O USER DA FERA É: {user.userName}</h1>
      <ButtonLogout />
    </div>
  );
};

export default Home;
