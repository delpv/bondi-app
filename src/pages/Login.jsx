import React from "react";
import {
  PageWrap,
  Split,
} from "../components/styled/login-style-comp/Login.styled.jsx";
import LoginLeft from "../components/login-components/LoginLeft.jsx";
import LoginRight from "../components/login-components/LoginRight.jsx";
const Login = ({ onGetLogin }) => {
  return (
    <PageWrap>
      <Split>
        <LoginLeft onGetUser={(localUser) => onGetLogin(localUser)} />
        <LoginRight />
      </Split>
    </PageWrap>
  );
};

export default Login;
