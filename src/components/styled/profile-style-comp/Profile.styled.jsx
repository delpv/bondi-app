import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ProfileMainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProfileSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 100%;
  padding-bottom: 40px;

  /* Apply same viewport-aware constraints as cover section for responsive behavior */
  @media (max-width: 1040px) {
    width: calc(100vw - 80px);
    max-width: calc(100vw - 80px);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 72px);
    max-width: calc(100vw - 72px);
  }

  @media (max-width: 480px) {
    width: calc(100vw - 64px);
    max-width: calc(100vw - 64px);
  }
`;
