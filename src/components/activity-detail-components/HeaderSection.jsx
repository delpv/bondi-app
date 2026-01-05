import Parse from "parse";
import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../../utils/getCurrentUser";

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

const HeaderSection = ({ activity, category, host, initialHasJoined }) => {
  const [hasJoined, setHasJoined] = useState(initialHasJoined || false);
  const [joinedCount, setJoinedCount] = useState(0);
  const [waitingList, setWaitingList] = useState(false);
  const [isHost, setIsHost] = useState(false);

  if (!activity) return <div>Loading...</div>;

  const maxCapacity = activity.maxCapacity || 0;

  const activityPointer = React.useMemo(() => {
    if (!activity) return null;

    if (activity instanceof Parse.Object) return activity;

    const Activity = Parse.Object.extend("Activity");
    const ptr = new Activity();
    const id = activity.id || activity.objectId;
    if (!id) return null;
    ptr.id = id;
    return ptr;
  }, [activity]);

  useEffect(() => {
    const fetchJoinedCount = async () => {
      if (!activityPointer) return;

      const Participation = Parse.Object.extend("Participation");
      const query = new Parse.Query(Participation);
      query.equalTo("activity_id", activityPointer);

      const count = await query.count();
      setJoinedCount(count);
    };

    fetchJoinedCount().catch(console.error);
  }, [activityPointer]);

  useEffect(() => {
    const checkHost = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser || !host) return;

      const hostId = host.id || host.objectId || host.get?.("objectId");
      const currentUserId = currentUser.id || currentUser.get?.("objectId");

      setIsHost(Boolean(currentUserId && hostId && currentUserId === hostId));
    };

    checkHost();
  }, [host]);

  const handleJoin = async () => {
    if (isHost || !activityPointer) return;

    const currentUser = await getCurrentUser();
    if (!currentUser) return;

    const Participation = Parse.Object.extend("Participation");
    const baseQuery = new Parse.Query(Participation);
    baseQuery.equalTo("activity_id", activityPointer);
    baseQuery.equalTo("UserId", currentUser);

    if (hasJoined) {
      // leave
      const existing = await baseQuery.first();
      if (existing) {
        await existing.destroy();
        setHasJoined(false);
        setJoinedCount((prev) => Math.max(0, prev - 1));
        setWaitingList(false);
      }
    } else {
      // join
      if (joinedCount < maxCapacity) {
        const participation = new Participation();
        participation.set("activity_id", activityPointer);
        participation.set("UserId", currentUser);
        await participation.save();

        setHasJoined(true);
        setJoinedCount((prev) => prev + 1);
      } else {
        setWaitingList(true);
      }
    }
  };

  const dateStart = activity.dateStart ? new Date(activity.dateStart) : null;
  const dateEnd = activity.dateEnd ? new Date(activity.dateEnd) : null;

  const formattedStart = dateStart ? dateStart.toLocaleString() : "TBD";
  const formattedEnd = dateEnd ? dateEnd.toLocaleString() : "TBD";

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
            $joined={hasJoined || isHost}
            onClick={handleJoin}
            disabled={isHost}
          >
            {isHost
              ? "I am hosting"
              : waitingList
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

          {joinedCount >= maxCapacity && !isHost && (
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
