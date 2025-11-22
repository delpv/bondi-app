import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EyeIcon from "../../assets/icons_app/eye.svg?react";
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
  ButtonLogin,
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

        <ButtonLogin type="submit">Login</ButtonLogin>
      </FormCard>

      <BellowText>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </BellowText>
    </Left>
  );
};

export default LoginLeft;
