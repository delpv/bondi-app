import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Parse from "parse";
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
import Divider from "../../assets/icons_app/divider.svg?react";
import { AuthContext } from "../../context/AuthContext.jsx";

const HostCard = ({ host, hostInfo, activitiesHosted }) => {
  const navigate = useNavigate();

  if (!host) return <div>No host data</div>;

  const profilePictureFile = hostInfo?.get("profilePicture");
  const profilePictureUrl = profilePictureFile
    ? profilePictureFile.url()
    : null;
  const hostName = host.get("fullName") || "Unknown host";
  const aboutMe = hostInfo?.get("aboutMe") || "No description available.";
  const memberSince = host.get("createdAt")?.getFullYear() || "Unknown";

  const goToProfile = () => {
    navigate("/profile");
  };

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
      <Divider />

      <DescriptionContainer>
        <HostMemberSince>Member since: {memberSince}</HostMemberSince>
        <ActivitiesHostedLabel>
          {activitiesHosted} Activities Hosted
        </ActivitiesHostedLabel>
        <HostButton onClick={goToProfile}>See Profile</HostButton>
      </DescriptionContainer>
    </HostCardContainer>
  );
};

export default HostCard;
