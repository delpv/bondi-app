import React from 'react';
import {
  AboutContainer,
  AboutFrame,
  AboutTitle,
  EditButton,
  AboutTextContainer,
  AboutText
} from "../styled/profile-style-comp/About.styled";

const About = () => {
  return (
    <AboutContainer>
      <AboutFrame>
        <AboutTitle>About</AboutTitle>
        <EditButton>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </EditButton>
      </AboutFrame>
      
      <AboutTextContainer>
        <AboutText>
          Love exploring new places and meeting new people! Always up for outdoor adventures, coffee chats, and trying new restaurants. Looking forward to connecting with like-minded people in Copenhagen.
        </AboutText>
      </AboutTextContainer>
    </AboutContainer>
  );
};

export default About;