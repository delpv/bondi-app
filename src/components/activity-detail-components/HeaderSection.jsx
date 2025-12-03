// Styled imports
import React, { useState, useEffect } from "react";

// Styled imports
import {
  HeaderSectionContainer,
  HeaderImage,
  HeaderText,
  WaitingList,
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
import Calendar from "../../assets/icons_app/calendar.svg?react";
// import Clock from "../../assets/Icons/clock.svg?react";
import Location from "../../assets/icons_app/location.svg?react";

const HeaderSection = ({ activity }) => {
  const [hasJoined, setHasJoined] = useState(false);
  const [joinedCount, setJoinedCount] = useState(0);
  const [waitingList, setWaitingList] = useState(false);

  const [category, setCategory] = useState(null);

  const maxCapacity = activity.maxCapacity || 0;

  const handleJoin = () => {
    if (hasJoined) {
      setHasJoined(false);
      setJoinedCount((prev) => prev - 1);
      setWaitingList(false);
    } else {
      if (joinedCount < maxCapacity) {
        setHasJoined(true);
        setJoinedCount((prev) => prev + 1);
      } else {
        setWaitingList(true);
      }
    }
  };

  const dateStart = activity.dateStart;
  const dateEnd = activity.dateEnd;

  const formattedStart = dateStart ? dateStart.toLocaleString() : "TBD";
  const formattedEnd = dateEnd ? dateEnd.toLocaleString() : "TBD";

  const title = activity.Title || "TBD";
  const location = activity.location || "Location to be decided";
  const categoryName = activity.category?.name || "Any ideas?";

  const image = activity.coverPhoto_img?.url() || "No image";

  return (
    <HeaderSectionContainer>
      <HeaderImage src={image} alt="Yoga" />
      <HeaderText>{title}</HeaderText>
      <CardRow>
        <CardLeft>
          <Label type="yellow">
            <Calendar /> {formattedStart} - {formattedEnd}
          </Label>

          {/* <Label type="yellow">
            <Clock /> Time
          </Label> */}
          <Label type="yellow">
            <Location /> {location}
          </Label>
          <Label type="green">{categoryName}</Label>
        </CardLeft>
        <CardRight>
          <JoinButton $joined={hasJoined} onClick={handleJoin}>
            {waitingList
              ? "Join Waiting List"
              : hasJoined
                ? "Joined"
                : "Join Activity"}
          </JoinButton>

          <CountLabel>
            <CountNumber>
              {joinedCount}/{maxCapacity}
            </CountNumber>{" "}
            people joined
          </CountLabel>

          {joinedCount >= maxCapacity && (
            <WaitingList>
              <p>Activity is full — you’re on the waiting list.</p>
            </WaitingList>
          )}
        </CardRight>
      </CardRow>
    </HeaderSectionContainer>
  );
};

export default HeaderSection;
