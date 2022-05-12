import React, { useCallback } from "react";

import { Form } from "@unform/web";
import Input from "../../components/Input";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userLogin } from "../../store/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { Container } from "./styles";

interface signInData {
  name: string;
  userName: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = useCallback(({ name, userName }: signInData) => {
    dispatch(userLogin({ name, userName }));
    navigate("/modules");
  }, []);

  const user = localStorage.getItem("@redux:user");

  if (user) return <Navigate to="/modules" />;

  return (
    <Container>
      <h1>Login page</h1>
      <Form onSubmit={(event) => handleSubmitLogin(event)}>
        <Input type="text" placeholder="name" name="name" />
        <Input type="text" placeholder="userName" name="userName" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default LoginPage;
