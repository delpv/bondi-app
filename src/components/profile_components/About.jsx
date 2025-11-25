import Parse from "../../utils/parseConfig.js";
import React, { useState, useEffect } from 'react';
import EditIcon from "../../assets/icons_app/edit.svg?react";
import {
  AboutContainer,
  AboutFrame,
  AboutTitle,
  EditButton,
  AboutTextContainer,
  AboutText,
  AboutTextarea,
  AboutEditActions,
  AboutDiscardButton,
  AboutSaveButton
} from "../styled/profile-style-comp/About.styled";

const About = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  // Use passed user ID or fallback to localStorage, then hardcoded
  const currentUserId = user?.id || localStorage.getItem('currentProfileUserId') || "yESQnpupOj";

  useEffect(() => {
    loadUserData();
  }, [currentUserId]); // Re-load when user changes

  const loadUserData = async () => {
    try {
      setIsLoading(true);
      const User = Parse.Object.extend("USER");
      const query = new Parse.Query(User);
      const user = await query.get(currentUserId);

      const aboutMe = user.get("aboutMe") || '';
      setAboutText(aboutMe);
      setOriginalText(aboutMe);
      setUserData({
        id: user.id,
        aboutMe: aboutMe
      });
    } catch (error) {
      console.error('Failed to load user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    if (!isEditing) {
      setOriginalText(aboutText);
    }
    setIsEditing(!isEditing);
  };

  const handleTextChange = (e) => {
    setAboutText(e.target.value);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const User = Parse.Object.extend("USER");
      const query = new Parse.Query(User);
      const user = await query.get(currentUserId);
      user.set("aboutMe", aboutText);
      await user.save();

      setOriginalText(aboutText);
      setIsEditing(false);
      console.log('About text saved successfully');
    } catch (error) {
      console.error('Failed to save about text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDiscard = () => {
    setAboutText(originalText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleDiscard();
    }
  };

  return (
    <AboutContainer>
      <AboutFrame>
        <AboutTitle>About</AboutTitle>
        <EditButton onClick={handleEditClick}>
          <EditIcon />
        </EditButton>
      </AboutFrame>

      <AboutTextContainer>
        {isEditing ? (
          <div>
            <AboutTextarea
              value={aboutText}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
              autoFocus
              disabled={isLoading}
              placeholder="Tell people about yourself..."
            />
            <AboutEditActions>
              <AboutDiscardButton
                onClick={handleDiscard}
                disabled={isLoading}
              >
                Discard
              </AboutDiscardButton>
              <AboutSaveButton
                onClick={handleSave}
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save'}
              </AboutSaveButton>
            </AboutEditActions>
          </div>
        ) : (
          <AboutText>
            {isLoading ? 'Loading...' : (aboutText || 'No about information added yet.')}
          </AboutText>
        )}
      </AboutTextContainer>
    </AboutContainer>
  );
};

export default About;