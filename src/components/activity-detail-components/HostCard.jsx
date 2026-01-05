import React from "react";
import { useNavigate } from "react-router";
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
import UserIcon from "../../assets/icons_app/user_icon.svg?react";

const HostCard = ({ host, hostInfo, activitiesHosted }) => {
  const navigate = useNavigate();

  if (!host) return <div>No host data</div>;

  const profilePictureUrl = hostInfo?.profilePicture?.url() || null;
  const hostName = host.fullName || "Unknown host";
  const aboutMe = hostInfo?.aboutMe || "No description available.";

  const memberSince = formatMemberSince(host?.createdAt);

  return (
    <HostCardContainer>
      <HostTitle>
        <UserIcon /> Hosted By
      </HostTitle>

      <HostInfoContainer>
        <HostImage src={profilePictureUrl} alt={hostName} />
        <HostTextContainer>
          <HostName>{hostName}</HostName>
          <HostSubtitle>Host</HostSubtitle>
        </HostTextContainer>
      </HostInfoContainer>

      <HostDescription>{aboutMe}</HostDescription>

      <DescriptionContainer>
        <HostMemberSince>Member since: {memberSince}</HostMemberSince>
        <ActivitiesHostedLabel>
          {activitiesHosted} Activities Hosted
        </ActivitiesHostedLabel>
      </DescriptionContainer>
    </HostCardContainer>
  );
};

export default HostCard;
