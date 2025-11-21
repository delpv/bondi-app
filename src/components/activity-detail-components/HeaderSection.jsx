// Styled imports
import React, { useState, useEffect } from "react";
import Parse from "../../utils/parseConfig.js"; // use the initialized Parse

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
import Calendar from "../../assets/icons/calendar.svg?react";
// import Clock from "../../assets/Icons/clock.svg?react";
import Location from "../../assets/icons/location.svg?react";

const HeaderSection = ({ activity }) => {
  const [hasJoined, setHasJoined] = useState(false);
  const [joinedCount, setJoinedCount] = useState(0);
  const [waitingList, setWaitingList] = useState(false);

  const [category, setCategory] = useState(null);

  // Manually set the objectId of the activity you want to display

  useEffect(() => {
    if (!activity) return;

    const fetchCategory = async () => {
      try {
        const categoryRef = activity.get("category");
        if (categoryRef) {
          const categoryObj = await categoryRef.fetch();
          setCategory(categoryObj);
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [activity]);

  if (!activity) return <div>Loading...</div>;

  const maxCapacity = activity?.get("maxCapacity") || 0;

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

  const dateStart = activity?.get("dateStart");
  const dateEnd = activity?.get("dateEnd");

  const formattedStart = dateStart ? dateStart.toLocaleString() : "Loading...";
  const formattedEnd = dateEnd ? dateEnd.toLocaleString() : "Loading...";

  const title = activity?.get("Title") || "Loading...";
  const location = activity?.get("location") || "Loading...";
  const categoryName = category?.get("name") || "Loading...";

  return (
    <HeaderSectionContainer>
      <HeaderImage src={"public/yoga.jpg"} alt="Yoga" />
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

          {waitingList && (
            <p style={{ color: "black", background: "pink" }}>
              Activity is full — you’re on the waiting list.
            </p>
          )}
        </CardRight>
      </CardRow>
    </HeaderSectionContainer>
  );
};

export default HeaderSection;
