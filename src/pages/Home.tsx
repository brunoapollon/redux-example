import React from "react";
import { useAppSelector } from "../components/store/hooks";

// import { Container } from './styles';

const Home: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div>
      <h1>O NOME DA FERA É: {user.name}</h1>
    </div>
  );
};

export default Home;
