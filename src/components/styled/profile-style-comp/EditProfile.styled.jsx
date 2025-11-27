import styled from "styled-components";

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

// Edit modal actions container
export const EditModalActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

// Base edit modal button styles
const BaseEditModalButton = styled.button`
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

export const EditModalSuccessButton = styled(BaseEditModalButton)`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
`;

export const EditModalSecondaryButton = styled(BaseEditModalButton)`
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
`;