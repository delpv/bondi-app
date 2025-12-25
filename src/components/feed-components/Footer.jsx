import React from "react";
import { Link } from "react-router-dom";
import BondiLogo from "../../assets/icons_app/second-logo.svg?react";
import {
  FooterInner,
  FooterWrapper,
  LeftBlock,
  Tagline,
  CenterBlock,
  RightBlock,
  FooterLink,
  LogoContainer,
} from "../styled/feed-style-comp/Footer.styled.jsx";

function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <LeftBlock>
          <LogoContainer>
            <BondiLogo />
          </LogoContainer>
          <Tagline>
            {" "}
            Connect through shared activities and build meaningful friendships
            in your local community.
          </Tagline>
        </LeftBlock>

        <CenterBlock>
          <strong>Contact Us</strong>
          <FooterLink as={Link} to="/contact">
            bondi-group@gmail.com{" "}
          </FooterLink>
          <FooterLink as={Link} to="/about">
            {" "}
            <strong>About Us</strong>{" "}
          </FooterLink>
        </CenterBlock>

        <RightBlock>
          &copy; {new Date().getFullYear()} Bondi. All rights reserved.
        </RightBlock>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
