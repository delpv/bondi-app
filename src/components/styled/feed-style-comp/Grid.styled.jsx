import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  margin-left: 20px;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  column-gap: 40px;
  align-items: start;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
