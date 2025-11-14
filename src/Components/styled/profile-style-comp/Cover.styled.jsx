import styled from "styled-components";

// Color variables for consistency
const border = "#61646B";
const shadowColor = "rgba(0, 0, 0, 0.4)";

// Main cover container - entire cover area (cover frame)
export const CoverContainer = styled.div`
  width: 100%;
  height: clamp(300px, 30vw, 424px);
  padding: clamp(20px, 2.5vw, 35px) 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: clamp(280px, 40vw, 350px);
    padding: 16px 0;
  }

  @media (max-width: 480px) {
    height: 280px;
    padding: 12px 0;
  }
`;

// Profile cover - inner container with the actual cover content
export const ProfileCover = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 354px;
  padding: 10px 0;
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

  @media (max-width: 1520px) {
    width: calc(100vw - 80px);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 72px);
  }

  @media (max-width: 480px) {
    width: calc(100vw - 64px);
  }
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
  width: clamp(130px, 12vw, 180px);
  height: clamp(130px, 12vw, 180px);
  border-radius: 50%;
  border: clamp(2px, 0.3vw, 4px) solid #4A90E2;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-width: 3px;
  }

  @media (max-width: 480px) {
    width: 130px;
    height: 130px;
    border-width: 2px;
  }
`;

// Camera icon button positioned at bottom-right of avatar
export const CameraIconButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: none;
  order: 0;
  flex-grow: 0;

  svg {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 0px;
    right: 0px;
    border-radius: 25px;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    bottom: 0px;
    right: 0px;
    border-radius: 20px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  &:hover {
    transform: translateY(-1px);
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
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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

// Calendar Button with specific styling
export const CalendarButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 0;

  svg {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;

    svg {
      width: 56px;
      height: 56px;
    }
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;

    svg {
      width: 48px;
      height: 48px;
    }
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Edit Profile Button with specific styling
export const EditProfileButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  flex: none;
  order: 1;
  flex-grow: 0;
  padding: 0;

  svg {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;

    svg {
      width: 56px;
      height: 56px;
    }
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;

    svg {
      width: 48px;
      height: 48px;
    }
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Camera dropdown container
export const CameraDropdown = styled.div`
  position: absolute;
  bottom: -140px;
  left: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 0;
  min-width: 180px;
  z-index: 10;
  overflow: hidden;
`;

// Camera dropdown option button
export const CameraDropdownOption = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: ${props => props.isHovered ? '#68B6FF' : 'white'};
  text-align: left;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 0.875rem;
  color: #374151;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  border-radius: 0;
  display: block;
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

// Edit modal overlay
export const EditModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// Edit modal container
export const EditModalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  min-width: 400px;
  max-width: 90vw;
`;

// Edit modal title
export const EditModalTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
`;

// Edit modal field container
export const EditModalField = styled.div`
  margin-bottom: 20px;
`;

// Edit modal label
export const EditModalLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
`;

// Edit modal input
export const EditModalInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
`;

// Edit modal button group
export const EditModalButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

// Edit modal actions container
export const EditModalActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

// Edit modal button base
export const EditModalButton = styled.button`
  padding: ${props => props.size === 'small' ? '8px 16px' : '10px 20px'};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  ${props => {
    switch(props.variant) {
      case 'primary':
        return `
          background-color: #007bff;
          color: white;
        `;
      case 'danger':
        return `
          background-color: #dc3545;
          color: white;
        `;
      case 'success':
        return `
          background-color: #28a745;
          color: white;
        `;
      case 'secondary':
      default:
        return `
          background-color: #6c757d;
          color: white;
        `;
    }
  }}
`;
