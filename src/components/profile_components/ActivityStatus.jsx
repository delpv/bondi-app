import React from "react";
import {
  ActivityStatusContainer,
  HeaderFrame,
  TitleSection,
  SectionTitle,
  StatusContent,
  StatusItem,
  NumberContainer,
  StatusNumber,
  TextContainer,
  StatusText,
} from "../styled/profile-style-comp/ActivityStatus.styled";

const ActivityStatus = () => {
  const statusData = [
    {
      id: 1,
      number: "0",
      text: "Activities Joined",
    },
    {
      id: 2,
      number: "0",
      text: "Activities Hosted",
    },
  ];

  return (
    <ActivityStatusContainer>
      <HeaderFrame>
        <TitleSection>
          <SectionTitle>Activity Status</SectionTitle>
        </TitleSection>
      </HeaderFrame>

      <StatusContent>
        {statusData.map((status) => (
          <StatusItem key={status.id}>
            <NumberContainer>
              <StatusNumber>{status.number}</StatusNumber>
            </NumberContainer>
            <TextContainer>
              <StatusText>{status.text}</StatusText>
            </TextContainer>
          </StatusItem>
        ))}
      </StatusContent>
    </ActivityStatusContainer>
  );
};

export default ActivityStatus;
