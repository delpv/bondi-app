import styled from "styled-components";

export const PageWrap = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export const Split = styled.section`
  width: min(1200px, 95vw);
  min-height: 82vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
