import Parse from "parse";
import React, { useState, useEffect } from "react";
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
  AboutSaveButton,
} from "../styled/profile-style-comp/About.styled";

const About = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const currentUserId = user?.id;

  useEffect(() => {
    loadUserData();
  }, [currentUserId]);

  const loadUserData = async () => {
    try {
      setIsLoading(true);

      const userInfo = user?.get("user_Info");
      if (!userInfo) {
        setAboutText("");
        setOriginalText("");
        return;
      }
      const info = userInfo.fetch ? await userInfo.fetch() : userInfo;
      const aboutMe = info.get("aboutMe") || "";
      setAboutText(aboutMe);
      setOriginalText(aboutMe);
    } catch (error) {
      console.error("Failed to load user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    if (isEditing) return;
    setOriginalText(aboutText);
    setIsEditing(true);
  };

  const handleTextChange = (e) => {
    setAboutText(e.target.value);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);

      const userInfoPtr = user?.get("user_Info");
      if (!userInfoPtr) return;

      const userInfo = userInfoPtr.fetch
        ? await userInfoPtr.fetch()
        : userInfoPtr;
      userInfo.set("aboutMe", aboutText);
      await userInfo.save();

      setOriginalText(aboutText);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save about text:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDiscard = () => {
    setAboutText(originalText);
    setIsEditing(false);
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
              autoFocus
              disabled={isLoading}
              placeholder="Tell people about yourself..."
            />
            <AboutEditActions>
              <AboutDiscardButton onClick={handleDiscard} disabled={isLoading}>
                Discard
              </AboutDiscardButton>
              <AboutSaveButton onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save"}
              </AboutSaveButton>
            </AboutEditActions>
          </div>
        ) : (
          <AboutText>
            {isLoading
              ? "Loading..."
              : aboutText || "No about information added yet."}
          </AboutText>
        )}
      </AboutTextContainer>
    </AboutContainer>
  );
};

export default About;
