import styled from "styled-components";

const ink = "#111318";
const subtle = "#6B7280";
const border = "#E9ECEF";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #fff;
  border-top: 1px solid ${border};
  margin-top: auto;
`;
export const FooterInner = styled.div`
  max-width: auto;
  margin: 0 auto;
  padding: 32px 42px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 14px;
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Tagline = styled.p`
  font-family: "Inter";
  margin: 4;
  font-size: 0.9rem;
  color: ${subtle};
  line-height: 1;
  max-width: 325px;
`;

export const CenterBlock = styled.div`
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TopLinks = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
`;

export const RightBlock = styled.div`
  text-align: right;
  color: ${subtle};
  font-size: 0.9rem;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const FooterLink = styled.a`
  font-family: "Inter";
  color: ${ink};
  text-decoration: none;
  font-sizet: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`;
