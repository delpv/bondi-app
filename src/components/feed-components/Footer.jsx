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
  ContactSection,
  TopLinks,
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
          <TopLinks>
            <ContactSection>
              <strong>Contact Us</strong>

              <FooterLink as="a" href="mailto:cpop@itu.dk">
                cpop@itu.dk
              </FooterLink>
              <FooterLink as="a" href="mailto:ioda@itu.dk">
                ioda@itu.dk
              </FooterLink>
              <FooterLink as="a" href="mailto:suta@itu.dk">
                suta@itu.dk
              </FooterLink>
              <FooterLink as="a" href="mailto:veko@itu.dk">
                veko@itu.dk
              </FooterLink>
            </ContactSection>
            <ContactSection>
              <strong>About Us</strong>

              <FooterLink as={Link} to="/about">
                Read more
              </FooterLink>
            </ContactSection>
          </TopLinks>
        </CenterBlock>

        <RightBlock>
          &copy; {new Date().getFullYear()} Bondi. All rights reserved.
        </RightBlock>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
