import React from "react";
import {
  PageWrap,
  Split,
} from "../components/styled/login-style-comp/Login.styled.jsx";
import RegisterLeft from "../components/login-components/RegisterLeft.jsx";
import LoginRight from "../components/login-components/LoginRight.jsx";

const Register = () => {
  return (
    <PageWrap>
      <Split>
        <RegisterLeft />
        <LoginRight />
      </Split>
    </PageWrap>
  );
};

export default Register;
