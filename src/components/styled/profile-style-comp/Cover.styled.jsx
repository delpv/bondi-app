import styled from "styled-components";

import {
  EditModalOverlay,
  EditModalContainer,
  EditModalTitle,
  EditModalField,
  EditModalLabel,
  EditModalInput,
  EditModalActions,
  EditProfileButton,
  EditModalSecondaryButton,
  EditModalSuccessButton,
} from "./EditProfile.styled";

import {
  ProfileInfoCard,
  ProfileName,
  MemberSince,
  ProfileAddressContainer,
  ProfileAddressText,
} from "./ProfileInfo.styled";

export {
  EditModalOverlay,
  EditModalContainer,
  EditModalTitle,
  EditModalField,
  EditModalLabel,
  EditModalInput,
  EditModalActions,
  EditProfileButton,
  EditModalSecondaryButton,
  EditModalSuccessButton,
};

export { ProfileInfoCard, ProfileName, MemberSince, ProfileAddressContainer, ProfileAddressText };

const border = "#61646B";
const shadowColor = "rgba(0, 0, 0, 0.4)";

export const CoverContainer = styled.div`
  width: 100%;
  height: 400px; /* default height */
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin: 0 auto;

  /* Tablet */
  @media (max-width: 768px) {
    height: 320px;
    padding: 20px 0;
  }

  /* Mobile */
  @media (max-width: 480px) {
    height: 260px;
    padding: 15px 0;
  }
`;

export const ProfileCover = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  align-items: center;
  gap: clamp(12px, 2vw, 20px);
  height: 354px;
  padding: clamp(16px, 2vw, 24px) 20px;
  justify-content: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${border};
  box-shadow: 0 4px 8px -2px ${shadowColor};
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1520px) {
    width: calc(100% - 80px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 72px);
    gap: clamp(10px, 1.5vw, 16px);
    padding: clamp(14px, 1.5vw, 20px) 16px;
  }

  @media (max-width: 580px) {
    height: auto;
    min-height: 300px;
    padding: 12px 12px 16px 12px;
    gap: clamp(8px, 1vw, 12px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 48px);
    height: auto;
    min-height: 280px;
    padding: 10px 12px 14px 12px;
    gap: clamp(6px, 0.8vw, 10px);
  }
`;

export const CoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.02),
    rgba(0, 0, 0, 0.08)
  );
  z-index: 1;
`;

export const ActionButtons = styled.div`
  position: absolute;
  top: clamp(12px, 1.5vw, 20px);
  right: clamp(12px, 1.5vw, 20px);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1vw, 12px);

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    gap: 8px;
  }
`;

export const CoverContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(12px, 1.5vw, 14px);
  color: white;
  width: 100%;
  max-width: calc(100% - 20px);
  margin: 0 auto;

  @media (max-width: 480px) {
    gap: clamp(8px, 1vw, 10px);
    max-width: calc(100% - 16px);
  }
`;

export const ProfileAvatarContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ProfileAvatar = styled.img`
  width: clamp(130px, 12vw, 180px);
  height: clamp(130px, 12vw, 180px);
  border-radius: 50%;
  border: clamp(2px, 0.3vw, 4px) solid #4a90e2;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-width: 3px;
  }

  @media (max-width: 580px) {
    width: clamp(100px, 20vw, 130px);
    height: clamp(100px, 20vw, 130px);
    border-width: 2px;
  }

  @media (max-width: 480px) {
    width: clamp(90px, 18vw, 110px);
    height: clamp(90px, 18vw, 110px);
    border-width: 2px;
  }
`;

export const DynamicProfileCover = styled(ProfileCover)`
  background-image: url(${(props) => props.backgroundImage});
`;

// Image Preview Components for Edit Modal
export const ImagePreviewContainer = styled.div`
  margin-top: 8px;
`;

export const ProfilePicturePreview = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CoverPhotoPreview = styled.img`
  width: 120px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
`;
