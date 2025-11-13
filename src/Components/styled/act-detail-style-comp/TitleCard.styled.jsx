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

export const CardWhatToBring = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;

  h3 {
    display: flex;
    align-items: center;
    gap: 8px; /* space between icon and text */
    margin: 0 0 5px 0;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-family: "Inter", sans-serif;
  }
`;

export const BringList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 15px 20px; /* row gap 15px, column gap 20px */
`;

export const BringBadge = styled.li`
  display: inline-block; /* allows wrapping content naturally */
  justify-content: center;
  align-items: center;
  background: rgba(253, 244, 244, 1);
  color: black;
  padding: 6px 6px; /* extra space around text */
  border-radius: 999px;
  font-size: 14px;
  letter-spacing: 0.5px;
  max-width: 100%; /* ensures it doesn't overflow */
  word-wrap: break-word; /* wrap long text if needed */
  text-align: center;
`;
