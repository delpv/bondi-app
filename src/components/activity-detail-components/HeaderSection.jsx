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

  const [activity, setActivity] = useState(null);

  // Manually set the objectId of the activity you want to display
  const activityObjectId = "XNGNoKPR5r";

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const Activity = Parse.Object.extend("Activity");
        const query = new Parse.Query(Activity);
        const result = await query.get(activityObjectId); // fetch from Back4App
        setActivity(result);
      } catch (error) {
        console.error("Error fetching activity:", error);
      }
    };

    fetchActivity();
  }, []);

  const [category, setCategory] = useState(null);

  // Manually set the objectId of the activity you want to display
  const categoryObjectId = "pz8KRp3sBx";

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const Category = Parse.Object.extend("Category");
        const query = new Parse.Query(Category);
        const result = await query.get(categoryObjectId); // fetch from Back4App
        setCategory(result);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, []);
  if (!activity || !category) return <div>Loading...</div>;

  const dateStart = activity?.get("dateStart");
  const dateEnd = activity?.get("dateEnd");

  const formattedStart = dateStart ? dateStart.toLocaleString() : "Loading...";
  const formattedEnd = dateEnd ? dateEnd.toLocaleString() : "Loading...";

  const title = activity?.get("Title") || "Loading...";
  const location = activity?.get("location") || "Loading...";
  const categoryName = category?.get("name") || "Loading...";

  return (
    <HeaderSectionContainer>
      <HeaderImage src={Yoga} alt="Yoga" />
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
