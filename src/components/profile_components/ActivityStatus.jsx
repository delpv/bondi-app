import React from 'react';
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
  StatusText
} from "../styled/profile-style-comp/ActivityStatus.styled";

const ActivityStatus = () => {
  // Sample status data
  const statusData = [
    {
      id: 1,
      number: "15",
      text: "Activities Joined"
    },
    {
      id: 2,
      number: "2",
      text: "Activities Hosted"
    },
    {
      id: 3,
      number: "47",
      text: "Connections made"
    }
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