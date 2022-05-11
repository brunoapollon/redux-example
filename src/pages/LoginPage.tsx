import React, { useCallback } from "react";

import { Form } from "@unform/web";
import Input from "../components/Input";

interface signInData {
  name: string;
  userName: string;
}

const LoginPage: React.FC = () => {
  const handleSubmitLogin = useCallback(
    async ({ name, userName }: signInData) => {
      console.log(name, userName);
    },
    []
  );

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
