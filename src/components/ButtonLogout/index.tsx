import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { userLoggout } from "../../store/userSlice";

import { Button } from "./styles";

const ButtonLogout: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLoggout = useCallback(() => {
    dispatch(userLoggout());

    navigate("/");
  }, []);

  return (
    <Button type="button" onClick={() => handleLoggout()}>
      Sair
    </Button>
  );
};

export default ButtonLogout;
