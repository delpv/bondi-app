import styled from "styled-components";

// Color variables for consistency
const border = "#61646B";
const shadowColor = "rgba(0, 0, 0, 0.4)";

// Main cover container - entire cover area (cover frame)
export const CoverContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: clamp(300px, 30vw, 424px);
  padding: clamp(20px, 2.5vw, 35px) clamp(20px, 5vw, 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: clamp(280px, 40vw, 350px);
    padding: 16px 20px;
  }

  @media (max-width: 480px) {
    height: 280px;
    padding: 12px 16px;
  }
`;

// Profile cover - inner container with the actual cover content
export const ProfileCover = styled.div`
  display: flex;
  height: 354px;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${border};
  box-shadow: 0 4px 8px -2px ${shadowColor};
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
`;

// Overlay for better text readability on background image
export const CoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.08));
  z-index: 1;
`;

// Action buttons container (top right)
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

export const ActionButton = styled.button`
  width: clamp(36px, 4vw, 44px);
  height: clamp(36px, 4vw, 44px);
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  color: #374151;

  svg {
    width: clamp(16px, 1.8vw, 20px);
    height: clamp(16px, 1.8vw, 20px);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background: #f9fafb;
  }

  &:active {
    transform: translateY(0);
  }
`;

// Content container that sits above the overlay
export const CoverContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: white;
`;

// Profile avatar container to position camera icon
export const ProfileAvatarContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Profile avatar styling
export const ProfileAvatar = styled.img`
  width: clamp(80px, 8vw, 120px);
  height: clamp(80px, 8vw, 120px);
  border-radius: 50%;
  border: clamp(2px, 0.3vw, 4px) solid #4A90E2;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    border-width: 3px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    border-width: 2px;
  }
`;

// Camera icon button positioned at bottom-right of avatar
export const CameraIconButton = styled.button`
  position: absolute;
  bottom: clamp(4px, 0.5vw, 8px);
  right: clamp(4px, 0.5vw, 8px);
  width: clamp(24px, 2.5vw, 32px);
  height: clamp(24px, 2.5vw, 32px);
  border-radius: 50%;
  background: #4A90E2;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  color: white;

  svg {
    width: clamp(12px, 1.2vw, 16px);
    height: clamp(12px, 1.2vw, 16px);
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    bottom: 6px;
    right: 6px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    bottom: 4px;
    right: 4px;

    svg {
      width: 12px;
      height: 12px;
    }
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background: #3A7BD5;
  }

  &:active {
    transform: translateY(0);
  }
`;

// Profile info card (white background)
export const ProfileInfoCard = styled.div`
  background: white;
  border-radius: clamp(8px, 1vw, 12px);
  padding: clamp(12px, 1.5vw, 16px) clamp(16px, 2vw, 24px);
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: clamp(4px, 0.5vw, 8px);
  max-width: 90vw;

  @media (max-width: 768px) {
    padding: 14px 20px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    border-radius: 8px;
  }
`;

// Profile name styling
export const ProfileName = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #111318;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

// Member since text
export const MemberSince = styled.p`
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: #6B7280;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// Stats container
export const StatsContainer = styled.div`
  display: flex;
  gap: clamp(8px, 1.5vw, 16px);
  margin-top: clamp(12px, 1.5vw, 16px);
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-top: 12px;
    flex-direction: column;
    align-items: center;
  }
`;

// Individual stat badge
export const StatBadge = styled.div`
  background: white;
  border-radius: clamp(16px, 2vw, 20px);
  padding: clamp(6px, 0.8vw, 8px) clamp(12px, 1.5vw, 16px);
  font-size: clamp(0.75rem, 1.8vw, 0.875rem);
  color: #374151;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  text-align: center;

  @media (max-width: 768px) {
    padding: 7px 14px;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    width: fit-content;
  }
`;
