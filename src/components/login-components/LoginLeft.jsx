import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EyeIcon from "../../assets/Icons/eye.svg?react";
import {
  Left,
  H1,
  Tagline,
  FormCard,
  SectionTitle,
  Field,
  Label,
  Input,
  Row,
  RememberWrap,
  Checkbox,
  Forgot,
  ButtonLogin,
  Divider,
  SocialStack,
  SocialButton,
  BellowText,
} from "../styled/login-style-comp/LoginLeft.styled.jsx";

const LoginLeft = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock up data
    const mockUser = {
      name: "Catalina Popovici",
      email: "catalina@example.com",
      avatar: "/src/assets/Images/avatar.png",
    };

    localStorage.setItem("bondi_user", JSON.stringify(mockUser));

    navigate("/feed");
  };

  return (
    <Left>
      <H1>BONDI</H1>
      <Tagline>Connect through shared activities</Tagline>

      <FormCard onSubmit={handleSubmit}>
        <SectionTitle>Welcome</SectionTitle>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <Row>
            <Input
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              required
            />

            <button
              className="reveal"
              type="button"
              aria-label="Toggle password visibility"
              onClick={() => setShowPass((v) => !v)}
              title={showPass ? "Hide password" : "Show password"}
            >
              <EyeIcon />
            </button>
          </Row>
        </Field>

        <Row style={{ marginBottom: 12 }}>
          <RememberWrap>
            <Checkbox id="remember" type="checkbox" />
            <Label htmlFor="remember">Remember me</Label>
          </RememberWrap>

          <Forgot to="/forgot-password">Forgot password</Forgot>
        </Row>

        <ButtonLogin type="submit">Login</ButtonLogin>

        <Divider>
          <span>or</span>
        </Divider>

        <SocialStack>
          <SocialButton type="button">Continue with Google</SocialButton>
          <SocialButton type="button">Continue with Facebook</SocialButton>
        </SocialStack>
      </FormCard>

      <BellowText>
        Don't have an account? <Link>Sign up</Link>
      </BellowText>
    </Left>
  );
};

export default LoginLeft;
