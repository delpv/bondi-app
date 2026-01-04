import styled from "styled-components";

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

export const EditModalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px 45px 24px 24px;
  min-width: 400px;
  max-width: 90vw;
`;

export const EditModalTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
`;

export const EditModalField = styled.div`
  margin-bottom: 20px;
`;

export const EditModalLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
`;

export const EditModalInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
`;

export const EditModalActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const BaseEditModalButton = styled.button`
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
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
