import styled from "styled-components";

export const LocationCardContainer = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

export const LocationTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px; /* space between icon and text */

  svg {
    width: 29px; /* adjust size */
    height: 29px;
    fill: white; /* change SVG color */
  }
`;

export const LocationContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: "Inter", sans-serif;
  fotn-size: 16px;
  line-height: 1.6; /* adds space between lines */
`;

export const LocationImage = styled.img`
  max-width: 300px;
  height: 150px;
  object-fit: cover;
`;

export const DirectionButton = styled.button`
  font-family: "Inter", sans-serif;
  weight: 308px;
  hight: 50px;
  padding: 8px 16px;
  fotn-size: 14px;
  background-color: rgba(248, 220, 220, 1);
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px; /* space between icon and text */

  svg {
    width: 20px; /* adjust size */
    height: 20px;
    fill: white; /* change SVG color */
  }

  &:hover {
    background-color: rgba(236, 165, 165, 1);
  }
`;
