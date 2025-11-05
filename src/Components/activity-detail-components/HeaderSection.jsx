// Styled imports
import React, { useState } from "react";

// Styled imports
import {
  HeaderSectionContainer,
  HeaderImage,
  HeaderText,
} from "../styled/act-detail-style-comp/HeaderSection.styled.jsx";

import {
  JoinButton,
  Label,
  CardRow,
  CardLeft,
  CardRight,
  CountLabel,
  CountNumber,
} from "../styled/act-detail-style-comp/Common.jsx";

// Icons
import Calendar from "../../assets/Icons/calendar.svg?react";
import Clock from "../../assets/Icons/clock.svg?react";
import Location from "../../assets/Icons/location.svg?react";

import Yoga from "../../assets/images/yoga.jpg";

const HeaderSection = ({ activityName }) => {
  const [hasJoined, setHasJoined] = useState(false);
  const [joinedCount, setJoinedCount] = useState(0);

  const handleJoin = () => {
    setHasJoined((prev) => !prev);
    setJoinedCount((prev) => prev + (hasJoined ? -1 : 1));
  };

  return (
    <HeaderSectionContainer>
      <HeaderImage src={Yoga} alt="Yoga" />
      <HeaderText>{activityName}</HeaderText>
      <CardRow>
        <CardLeft>
          <Label type="yellow">
            <Calendar /> Date
          </Label>
          <Label type="yellow">
            <Clock /> Time
          </Label>
          <Label type="yellow">
            <Location /> Location
          </Label>
          <Label type="green">Category</Label>
        </CardLeft>
        <CardRight>
          <JoinButton $joined={hasJoined} onClick={handleJoin}>
            {hasJoined ? "Joined" : "Join Activity"}
          </JoinButton>
          <CountLabel>
            <CountNumber>{joinedCount}</CountNumber> people joined
          </CountLabel>
        </CardRight>
      </CardRow>
    </HeaderSectionContainer>
  );
};

export default HeaderSection;
