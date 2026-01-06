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

const HeaderSection = ({
  activity,
  category,
  hasJoined,
  joinedCount,
  waitingList,
  isFull,
  handleJoin,
}) => {
  if (!activity) return <div>Loading...</div>;

  const maxCapacity = activity.maxCapacity || 0;

  const dateStart = activity.dateStart ? new Date(activity.dateStart) : null;
  const dateEnd = activity.dateEnd ? new Date(activity.dateEnd) : null;

  const formattedStart = dateStart ? formatActivityDate(dateStart) : "TBD";
  const formattedEnd = dateEnd ? formatActivityDate(dateEnd) : "TBD";

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
          <JoinButton
            $joined={hasJoined}
            onClick={handleJoin}
            disabled={isFull && !hasJoined}
          >
            {hasJoined
              ? "Joined"
              : isFull
                ? "Full"
                : waitingList
                  ? "Join Waiting List"
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
              <p>Activity is full.</p>
            </WaitingList>
          )}
        </CardRight>
      </CardRow>
    </HeaderSectionContainer>
  );
};

export default HeaderSection;
