import styled from "styled-components";
import { Link } from "react-router";

const coral = "#E78F8E";
const text = "#2A2A2A";
const subtext = "#6F6F6F";
const cardBg = "#FFFFFF";
const line = "rgba(0,0,0,0.1)";

export const Left = styled.div`
  background: ${cardBg};
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  font-family: "Poppins", system-ui, sans-serif;
  letter-spacing: 0.06em;
  font-size: 28px;
  margin: 0 0 6px;
  text-align: center;
`;

export const Tagline = styled.p`
  margin: 0 0 24px;
  text-align: center;
  color: ${subtext};
  font-family: "Inter", system-ui, sans-serif;
`;

export const FormCard = styled.form`
  width: 100%;
  max-width: 480px;
  background: ${cardBg};
  border-radius: 16px;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
  padding: 30px 25px 50px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin: 0 0 16px;
`;

export const Field = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: 14px;
`;

export const Label = styled.label`
  color: ${subtext};
  font-size: 14px;
`;
export const Input = styled.input`
  width: 320px;
  height: 44px;
  padding: 0 10px 0 6px;
  border: 1px solid ${line};
  border-radius: 10px;
  background: #fff;
  color: ${text};
  outline: none;

  &::placeholder {
    color: #9a9a9a;
  }
  &:focus {
    border-color: ${coral};
    box-shadow: 0 0 0 3px rgba(234, 108, 91, 0.15);
  }
`;

export const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  /* make the reveal button sit on the right inside the field */
  .reveal {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border: none;
    background: transparent;
    border-radius: 8px;
    cursor: pointer;
  }

  .reveal svg {
    width: 22px;
    height: 22px;
    opacity: 0.8;
  }
`;
export const RememberWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  appearance: none; /* remove default browser style */
  border: 1.5px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease;

  &:checked {
    background-color: ${coral};
    border-color: ${coral};
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 5px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:hover {
    border-color: #ea6c5b;
  }
`;

export const Forgot = styled(Link)`
  margin-left: auto;
  font-size: 13px;
  text-decoration: none;
  color: #7a5af8;
`;

export const ButtonSignUp = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 8px;
  background: #1b1b1b;
  color: #ffffffff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(0.92);
  }
`;

export const Divider = styled.div`
  position: relative;
  margin: 6px 0 14px;
  text-align: center;

  span {
    position: relative;
    z-index: 1;
    padding: 0 10px;
    background: ${cardBg};
    color: ${subtext};
    font-size: 14px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    height: 1px;
    background: ${line};
    width: 45%;
  }

  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

export const SocialStack = styled.div`
  display: grid;
  gap: 10px;
`;

export const SocialButton = styled.button`
  height: 42px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background: #000000ff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: rgba(116, 116, 116, 1);
  }
`;

export const BellowText = styled.p`
  margin-top: 10px;
  font-size: 13px;
  text-align: center;

  a {
    color: #7a5af8;
    text-decoration: none;
  }
`;
