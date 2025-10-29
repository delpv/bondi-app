import React from "react";
import {
  PageWrap,
  Split,
} from "../Components/styled/login-style-comp/Login.styled.jsx";
import LoginLeft from "../Components/login-components/LoginLeft.jsx";
import LoginRight from "../Components/login-components/LoginRight.jsx";
const Login = () => {
  return (
    <PageWrap>
      <Split>
        <LoginLeft />
        <LoginRight />
      </Split>
    </PageWrap>
  );
};

export default Login;
