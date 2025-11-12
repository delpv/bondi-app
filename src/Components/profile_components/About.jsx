import React, { useState } from 'react';
import {
  AboutContainer,
  AboutFrame,
  AboutTitle,
  EditButton,
  AboutTextContainer,
  AboutText
} from "../styled/profile-style-comp/About.styled";

const About = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(
    "Love exploring new places and meeting new people! Always up for outdoor adventures, coffee chats, and trying new restaurants. Looking forward to connecting with like-minded people in Copenhagen."
  );

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTextChange = (e) => {
    setAboutText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      setIsEditing(false);
    }
  };

  return (
    <AboutContainer>
      <AboutFrame>
        <AboutTitle>About</AboutTitle>
        <EditButton onClick={handleEditClick}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </EditButton>
      </AboutFrame>
      
      <AboutTextContainer>
        {isEditing ? (
          <textarea
            value={aboutText}
            onChange={handleTextChange}
            onBlur={() => setIsEditing(false)}
            onKeyDown={handleKeyDown}
            autoFocus
            style={{
              width: '100%',
              minHeight: '58px',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: '1rem',
              lineHeight: '1.5',
              color: '#374151',
              margin: 0,
              padding: 0,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
          />
        ) : (
          <AboutText>
            {aboutText}
          </AboutText>
        )}
      </AboutTextContainer>
    </AboutContainer>
  );
};

export default About;