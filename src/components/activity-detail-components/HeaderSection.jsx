import React from "react";
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

import Calendar from "../../assets/icons_app/calendar.svg?react";
import Location from "../../assets/icons_app/location.svg?react";

import { useActivityJoin } from "../../hooks/useActivityJoin.js";
import { formatActivityDate } from "../../services/dateService";

const HeaderSection = ({ activity, category }) => {
  const maxCapacity = activity.maxCapacity || 0;

  const { hasJoined, joinedCount, waitingList, isFull, handleJoin } =
    useActivityJoin(maxCapacity);

  if (!activity) return <div>Loading...</div>;

  const formattedStart = formatActivityDate(activity.dateStart);
  const formattedEnd = formatActivityDate(activity.dateEnd);

  const title = activity.Title || "TBD";
  const location = activity.location || "Location to be decided";
  const categoryName = category?.name || "Any ideas?";
  const image = activity.coverPhoto_img?.url() || "No image";

  return (
    <HeaderSectionContainer>
      <HeaderImage src={image} alt="Activity" />
      <HeaderText>{title}</HeaderText>
      <CardRow>
        <CardLeft>
          <Label type="yellow">
            <Calendar /> {formattedStart} - {formattedEnd}
          </Label>
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

          {isFull && (
            <WaitingList>
              <p>Activity is full — you're on the waiting list.</p>
            </WaitingList>
          )}
        </CardRight>
      </CardRow>
    </HeaderSectionContainer>
  );
};

export default HeaderSection;
