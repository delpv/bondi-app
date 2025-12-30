import React, { useState, useEffect } from "react";
import Parse from "parse";
import Avatar from "/defaultAvatar.jpg";
import CoverBackground from "/puzzle-background.jpg";
import EditProfileIcon from "../../assets/icons_app/edit-profile.svg?react";
import EditModal from "./EditModal";
import {
  CoverContainer,
  CoverOverlay,
  CoverContent,
  ProfileAvatarContainer,
  ProfileAvatar,
  ProfileInfoCard,
  ProfileName,
  MemberSince,
  ProfileAddressContainer,
  ProfileAddressText,
  ActionButtons,
  EditProfileButton,
  DynamicProfileCover,
} from "../styled/profile-style-comp/Cover.styled";

const Cover = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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

      // Get user_Info pointer and fetch it
      const userInfoPtr = user.get("user_Info");
      let profilePicture = null;
      let coverPhoto = null;
      let address = null;
      
      if (userInfoPtr) {
        try {
          const userInfo = userInfoPtr.fetch ? await userInfoPtr.fetch() : userInfoPtr;
          const profilePictureFile = userInfo.get("profilePicture");
          const coverPhotoFile = userInfo.get("coverPhoto");
          profilePicture = profilePictureFile ? profilePictureFile.url() : null;
          coverPhoto = coverPhotoFile ? coverPhotoFile.url() : null;
          address = userInfo.get("address") || null;
        } catch (userInfoError) {
          console.warn("Could not fetch user_Info:", userInfoError);
        }
      }

      const userData = {
        id: user.id,
        username: user.get("username"),
        fullName: user.get("fullName"),
        profilePicture,
        coverPhoto,
        address,
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
  
  console.log(userData);
  return (
    <CoverContainer>
      <DynamicProfileCover
        backgroundImage={userData?.coverPhoto || CoverBackground}
      >
        <CoverOverlay />

        <ActionButtons>
          <EditProfileButton
            onClick={() => setShowEditModal(true)}
          >
            <EditProfileIcon />
          </EditProfileButton>
        </ActionButtons>

        <CoverContent>
          <ProfileAvatarContainer>
            <ProfileAvatar src={userData?.profilePicture || Avatar} alt="User avatar" />
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

          {userData?.address && (
            <ProfileAddressContainer>
              <ProfileAddressText>{userData.address}</ProfileAddressText>
            </ProfileAddressContainer>
          )}
        </CoverContent>
      </DynamicProfileCover>

      <EditModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        userData={userData}
        currentUserId={currentUserId}
        onSaveSuccess={loadUserData}
      />
    </CoverContainer>
  );
};

export default Cover;
