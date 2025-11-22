import React, { useState, useEffect } from "react";
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

const HostCard = ({ activitiesHosted }) => {
  const [user, setUser] = useState(null);
  const userObjectId = "tN3jRW5vvW";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const User = Parse.Object.extend("USER");
        const query = new Parse.Query(User);
        const result = await query.get(userObjectId);
        setUser(result);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  const profilePictureFile = user.get("profilePicture");
  const profilePictureUrl = profilePictureFile
    ? profilePictureFile.url()
    : null;
  const hostName = user.get("username") || "Unknown host";
  const aboutMe = user.get("aboutMe") || "No description available.";
  const memberSince = user.get("createdAt")?.getFullYear() || "Unknown";

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
        <HostButton>See Profile</HostButton>
      </DescriptionContainer>
    </HostCardContainer>
  );
};

export default HostCard;
