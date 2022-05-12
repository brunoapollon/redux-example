import React, { useCallback } from "react";

import { Form } from "@unform/web";
import Input from "../../components/Input";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userLogin } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

interface signInData {
  name: string;
  userName: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const handleSubmitLogin = useCallback(({ name, userName }: signInData) => {
    dispatch(userLogin({ name, userName }));
    navigate("/modules");
  }, []);

  return (
    <div>
      <h1>Login page</h1>
      <Form onSubmit={(event) => handleSubmitLogin(event)}>
        <Input type="text" placeholder="name" name="name" />
        <Input type="text" placeholder="userName" name="userName" />
        <button type="submit">Entrar</button>
      </Form>
    </div>
  );
};

export default LoginPage;
