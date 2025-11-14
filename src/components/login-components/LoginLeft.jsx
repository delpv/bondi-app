import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EyeIcon from "../../assets/Icons/eye.svg?react";
import Parse from "parse";
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
  ErrorMessage,
} from "../styled/login-style-comp/LoginLeft.styled.jsx";

const LoginLeft = ({ onGetUser }) => {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("password", password);
    console.log("email", email);

    try {
      const userQuery = new Parse.Query("USER");

      userQuery.equalTo("email", email);
      userQuery.equalTo("password", password);

      const user = await userQuery.first();

      if (user) {
        onGetUser(user);
        navigate("/feed");
      } else {
        setError("Email or password are wrong.");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Left>
      <H1>BONDI</H1>
      <Tagline>Connect through shared activities</Tagline>

      <FormCard onSubmit={handleSubmit}>
        <SectionTitle>Welcome</SectionTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
        Don't have an account? <Link to={"/signup"}>Sign up</Link>
      </BellowText>
    </Left>
  );
};

export default LoginLeft;
