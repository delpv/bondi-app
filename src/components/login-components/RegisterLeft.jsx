import React from "react";
import { useState, useContext } from "react";
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
  ErrorMessage,
} from "../styled/login-style-comp/LoginLeft.styled.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

const LoginLeft = () => {
  const { handleRegister } = useContext(AuthContext);

  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Password and repeat password do not match");
      return;
    }
    try {
      await handleRegister(email, fullName, password);
    } catch (e) {
      console.error(e);
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
          <Label htmlFor="fullname">Full name</Label>
          <Input
            id="fullname"
            type="text"
            placeholder="Enter full name"
            required
            onChange={(e) => setFullName(e.target.value)}
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

        <Field>
          <Row>
            <Label htmlFor="repeatPass">Repeat password</Label>
            <Input
              id="repeatPass"
              type={showRepeatPass ? "text" : "password"}
              placeholder="Repeat your password"
              required
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <button
              className="reveal"
              type="button"
              aria-label="Toggle password visibility"
              onClick={() => setShowRepeatPass((v) => !v)}
              title={showPass ? "Hide password" : "Show password"}
            >
              <EyeIcon />
            </button>
          </Row>
        </Field>

        <ButtonLogin type="submit">Sign up</ButtonLogin>
      </FormCard>

      <BellowText>
        Already have an account? <Link to={"/login"}>Log in</Link>
      </BellowText>
    </Left>
  );
};

export default LoginLeft;
