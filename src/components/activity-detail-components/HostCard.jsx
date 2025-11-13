import React from "react";
import {
  HostCardContainer,
  HostTitle,
  HostImage,
  HostName,
  HostDescription,
  HostMemberSince,
  HostButton,
  HostInfoContainer,
  HostTextContainer,
  HostSubtitle,
  ActivitiesHostedLabel,
  DescriptionContainer,
} from "../styled/act-detail-style-comp/HostCard.styled.jsx";
import User from "../../assets/Icons/User.svg?react";
import hostImage from "../../assets/images/olly-yoga.jpg";
import Divider from "../../assets/Icons/divider.svg?react";

const HostCard = ({ hostName, description, memberSince, activitiesHosted }) => (
  <HostCardContainer>
    <HostTitle>
      <User /> Hosted By
    </HostTitle>
    <HostInfoContainer>
      <HostImage src={hostImage} alt={hostName} />
      <HostTextContainer>
        <HostName>{hostName}</HostName>
        <HostSubtitle>Host</HostSubtitle>
      </HostTextContainer>
    </HostInfoContainer>
    <HostDescription>{description}</HostDescription>
    <Divider />
    <DescriptionContainer>
      <HostMemberSince>Member since: {memberSince}</HostMemberSince>
      <ActivitiesHostedLabel>
        {activitiesHosted} Activities Hosted
      </ActivitiesHostedLabel>
      <HostButton>See Profile</HostButton>
    </DescriptionContainer>
  </HostCardContainer>
);

export default HostCard;
