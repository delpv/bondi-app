

import React from 'react'
import Avatar from "../../assets/images/Avatar.png";
import CoverBackground from "../../assets/images/profile-images/cover_background.jpg";
import {
  CoverContainer,
  ProfileCover,
  CoverOverlay,
  CoverContent,
  ProfileAvatarContainer,
  ProfileAvatar,
  CameraIconButton,
  ProfileInfoCard,
  ProfileName,
  MemberSince,
  StatsContainer,
  StatBadge,
  ActionButtons,
  ActionButton
} from "../styled/profile-style-comp/Cover.styled";

const Cover = () => {
  return (
    <CoverContainer>
      <ProfileCover style={{ backgroundImage: `url(${CoverBackground})` }}>
        <CoverOverlay />
        
        {/* Action buttons */}
        <ActionButtons>
          <ActionButton>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
          </ActionButton>
          <ActionButton>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </ActionButton>
        </ActionButtons>

        <CoverContent>
          <ProfileAvatarContainer>
            <ProfileAvatar src={Avatar} alt="User avatar" />
            <CameraIconButton>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.2c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5zm0-3.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
                <path d="M20 5h-2.8l-1.3-2c-.2-.4-.6-.6-1-.6H9.1c-.4 0-.8.2-1 .6L6.8 5H4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1zm-1 12H5V7h3.1l1.3-2h5.2l1.3 2H19v10z"/>
              </svg>
            </CameraIconButton>
          </ProfileAvatarContainer>
          
          <ProfileInfoCard>
            <ProfileName>Marie</ProfileName>
            <MemberSince>Member since March 2025</MemberSince>
          </ProfileInfoCard>

          <StatsContainer>
            <StatBadge>11 activities joined</StatBadge>
            <StatBadge>Copenhagen, Denmark</StatBadge>
          </StatsContainer>
        </CoverContent>
      </ProfileCover>
    </CoverContainer>
  )
}

export default Cover
