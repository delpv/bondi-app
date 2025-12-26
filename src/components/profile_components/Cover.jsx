import React, { useState, useEffect } from "react";
import Parse from "parse";
import Avatar from "/defaultAvatar.jpg";
import CoverBackground from "/puzzle-background.jpg";
import EditProfileIcon from "../../assets/icons_app/edit-profile.svg?react";
import {
  CoverContainer,
  CoverOverlay,
  CoverContent,
  ProfileAvatarContainer,
  ProfileAvatar,
  ProfileInfoCard,
  ProfileName,
  MemberSince,
  StatsContainer,
  StatBadge,
  ActionButtons,
  EditProfileButton,
  EditModalOverlay,
  EditModalContainer,
  EditModalTitle,
  EditModalField,
  EditModalLabel,
  EditModalInput,
  EditModalActions,
  EditModalSecondaryButton,
  EditModalSuccessButton,
  DynamicProfileCover,
} from "../styled/profile-style-comp/Cover.styled";

const Cover = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState("");

  const currentUserId = user?.id;

  useEffect(() => {
    loadUserData();
  }, [currentUserId]); // Re-load when user changes

  const loadUserData = async () => {
    if (!currentUserId) return;
    try {
      setIsLoading(true);
      const User = Parse.Object.extend("_User");
      const query = new Parse.Query(User);
      const user = await query.get(currentUserId);

      const coverPhotoFile = user.get("coverPhoto");

      const userData = {
        id: user.id,
        username: user.get("username"),
        fullName: user.get("fullName"),
        aboutMe: user.get("aboutMe"),
        coverPhoto: coverPhotoFile ? coverPhotoFile.url() : null,
        createdAt: user.get("createdAt"),
      };

      setUserData(userData);
    } catch (error) {
      console.error("Database error details:", error);
      console.error("Error message:", error.message);
      console.error("Error code:", error.code);
      alert(`Database Error: ${error.message}. Check console for details.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveName = async () => {
    try {
      setIsLoading(true);
      const User = Parse.Object.extend("_User");
      const query = new Parse.Query(User);
      const user = await query.get(currentUserId);
      user.set("fullName", editName);
      await user.save();

      await loadUserData();
      setShowEditModal(false);
    } catch (error) {
      console.error("Failed to update name:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(userData);
  return (
    <CoverContainer>
      <DynamicProfileCover
        backgroundImage={userData?.coverPhoto || CoverBackground}
      >
        <CoverOverlay />

        <ActionButtons>
          <EditProfileButton
            onClick={() => {
              setEditName(userData?.fullName || "");
              setShowEditModal(true);
            }}
          >
            <EditProfileIcon />
          </EditProfileButton>
        </ActionButtons>

        <CoverContent>
          <ProfileAvatarContainer>
            <ProfileAvatar src={Avatar} alt="User avatar" />
          </ProfileAvatarContainer>

          <ProfileInfoCard>
            <ProfileName>{userData?.fullName || "Loading..."}</ProfileName>
            <MemberSince>
              Member since{" "}
              {userData?.createdAt
                ? new Date(userData.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })
                : "Loading..."}
            </MemberSince>
          </ProfileInfoCard>

          <StatsContainer>
            <StatBadge>11 activities joined</StatBadge>
            <StatBadge>Copenhagen, Denmark</StatBadge>
          </StatsContainer>
        </CoverContent>
      </DynamicProfileCover>

      {showEditModal && (
        <EditModalOverlay>
          <EditModalContainer>
            <EditModalTitle>Edit Profile</EditModalTitle>

            <EditModalField>
              <EditModalLabel>Full Name</EditModalLabel>
              <EditModalInput
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Enter your full name"
              />
            </EditModalField>

            <EditModalActions>
              <EditModalSecondaryButton
                onClick={() => setShowEditModal(false)}
                disabled={isLoading}
              >
                Cancel
              </EditModalSecondaryButton>
              <EditModalSuccessButton
                onClick={handleSaveName}
                disabled={isLoading || !editName.trim()}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </EditModalSuccessButton>
            </EditModalActions>
          </EditModalContainer>
        </EditModalOverlay>
      )}
    </CoverContainer>
  );
};

export default Cover;
