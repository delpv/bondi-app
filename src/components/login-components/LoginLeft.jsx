import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
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
  BellowText,
  ButtonLogin,
  ErrorMessage,
} from "../styled/login-style-comp/LoginLeft.styled.jsx";
import Parse from "parse";

const LoginLeft = () => {
  const { handleLogin } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await handleLogin(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e);
    } finally {
      setIsLoading(false);
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
        <ButtonLogin type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Login"}
        </ButtonLogin>
      </FormCard>

      <BellowText>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </BellowText>
    </Left>
  );
};

export default LoginLeft;
