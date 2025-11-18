import React from 'react';
import {
  InterestContainer,
  InterestFrame,
  InterestTitle,
  EditButton,
  InterestChipsContainer,
  InterestChip,
  ChipText
} from "../styled/profile-style-comp/Interest.styled";

const Interest = () => {
  // Sample interests data with colors matching the Figma gradients
  const interests = [
    { text: "Food & Dining", color: "coral" },
    { text: "Food & Dining", color: "peach" },
    { text: "Food & Dining", color: "mint" },
    { text: "Food & Dining", color: "orange" },
    { text: "Food & Dining", color: "blue" },
    { text: "Food & Dining", color: "purple" },
    { text: "Food & Dining", color: "green" }
  ];

  return (
    <InterestContainer>
      <InterestFrame>
        <InterestTitle>Interests</InterestTitle>
        <EditButton>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </EditButton>
      </InterestFrame>
      
      <InterestChipsContainer>
        {interests.map((interest, index) => (
          <InterestChip key={index} color={interest.color}>
            <ChipText>{interest.text}</ChipText>
          </InterestChip>
        ))}
      </InterestChipsContainer>
    </InterestContainer>
  );
};

export default Interest;