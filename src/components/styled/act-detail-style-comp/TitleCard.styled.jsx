import styled from "styled-components";

export const TitleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: "Poppins", sans-serif;
  border-radius: 12px;
  background-color: white;
`;

export const CardTitle = styled.h3`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 5px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;

  svg {
    width: 32px;
    height: 32px;
    display: inline-block;
  }
`;

export const CardDescription = styled.p`
  font-size: 16px;
  font-family: "Inter", sans-serif;
  text-align: left; /* aligns text to the left */
  line-height: 1.6; /* adds space between lines */
  margin-bottom: 1em; /* space after each paragraph */
  white-space: pre-line; /* respects line breaks (\n) */
`;
