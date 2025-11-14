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
  const [showRepeatPass, setShowRepeatPass] = useState(false);

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Password and repeat password do not match");
      return;
    }

    try {
      const userQuery1 = new Parse.Query("USER");
      const userQuery2 = new Parse.Query("USER");

      userQuery1.equalTo("email", email);
      userQuery2.equalTo("username", username);

      const user = await Parse.Query.or(userQuery1, userQuery2).first();

      if (user) {
        setError("Email or username already exists");
        return;
      }

      const userObj = new Parse.Object("USER");

      userObj.set("email", email);
      userObj.set("fullName", fullName);
      userObj.set("username", username);
      userObj.set("password", password);

      const result = await userObj.save();
      if (result) {
        onGetUser(result);
        navigate("/feed");
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
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
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

        <Row style={{ marginBottom: 12 }}>
          <RememberWrap>
            <Checkbox id="remember" type="checkbox" />
            <Label htmlFor="remember">Remember me</Label>
          </RememberWrap>

          <Forgot to="/forgot-password">Forgot password</Forgot>
        </Row>

        <ButtonLogin type="submit">Sign up</ButtonLogin>

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
