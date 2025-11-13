import React from "react";
import {
  PageWrap,
  Split,
} from "../Components/styled/login-style-comp/Login.styled.jsx";
import RegisterLeft from "../Components/login-components/RegisterLeft.jsx";
import LoginRight from "../Components/login-components/LoginRight.jsx";

const Register = ({ onRegister }) => {
  return (
    <PageWrap>
      <Split>
        <RegisterLeft onGetUser={(localUser) => onRegister(localUser)} />
        <LoginRight />
      </Split>
    </PageWrap>
  );
};

export default Register;
