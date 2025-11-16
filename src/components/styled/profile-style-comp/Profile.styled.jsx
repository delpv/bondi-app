import styled from "styled-components";

// Main profile page container
export const ProfilePageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Main content area that grows to push footer down
export const ProfileMainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Future sections container (for About, Interests, etc.)
export const ProfileSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 40px;
`;