import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, minmax(280px, 1fr));
  align-items: start;
  margin-left: 20px;

  //   single column on small screens
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  column-gap: 40px;
  align-items: start;
  width: 100%;
`;
