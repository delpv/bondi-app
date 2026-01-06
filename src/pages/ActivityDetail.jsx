import Parse from "parse";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import NavBar from "../components/feed-components/NavBar.jsx";
import Footer from "../components/feed-components/Footer.jsx";

import {
  MainContainer,
  ContentWrapper,
} from "../components/styled/MiddleSection/Middle.styled.jsx";
import HeaderSection from "../components/activity-detail-components/HeaderSection.jsx";
import TitleCard from "../components/activity-detail-components/TitleCard.jsx";
import HostCard from "../components/activity-detail-components/HostCard.jsx";

import { CardContainer } from "../components/styled/act-detail-style-comp/Common.jsx";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [host, setHost] = useState(null);
  const [hostInfo, setHostInfo] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasJoined, setHasJoined] = useState(false);
  const [activitiesHosted, setActivitiesHosted] = useState(0);
  const [joinedCount, setJoinedCount] = useState(0);
  const [waitingList, setWaitingList] = useState(false);

  useEffect(() => {
    const fetchActivityAndHost = async () => {
      try {
        const result = await Parse.Cloud.run("getActivityWithHost", {
          activityId: id,
        });
        console.log("result from cloud:", result);
        setActivity(result.activity);
        setHost(result.host);
        setHostInfo(result.hostInfo);
        setCategory(result.category);
      } catch (error) {
        console.error("Error fetching activity+host:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchActivityAndHost();
  }, [id]);

  useEffect(() => {
    const fetchActivitiesHosted = async () => {
      if (!host) return;

      try {
        const hostId = host.id || host.objectId;
        if (!hostId) return;

        const User = Parse.Object.extend("_User");
        const hostPtr = new User();
        hostPtr.id = hostId;

        const Activity = Parse.Object.extend("Activity");
        const query = new Parse.Query(Activity);
        query.equalTo("host_ID", hostPtr);

        const count = await query.count();
        setActivitiesHosted(count);
      } catch (err) {
        console.error("Error counting host activities:", err);
      }
    };

    fetchActivitiesHosted();
  }, [host]);

  useEffect(() => {
    const checkJoined = async () => {
      const currentUser = Parse.User.current();
      if (!currentUser || !activity) return;

      try {
        const activityQuery = new Parse.Query("Activity");
        const currentActivity = await activityQuery.get(activity.objectId);

        const participationQuery = new Parse.Query("Participation");
        participationQuery.equalTo("activity_id", currentActivity);
        participationQuery.equalTo("UserId", currentUser);

        const existing = await participationQuery.first();
        setHasJoined(!!existing);
      } catch (err) {
        console.error("Error checking joined status:", err);
      }
    };

    checkJoined();
  }, [activity]);

  useEffect(() => {
    const fetchJoinedCount = async () => {
      if (!activity) return;

      try {
        const Activity = Parse.Object.extend("Activity");
        const activityPtr = new Activity();
        activityPtr.id = activity.objectId;

        const Participation = Parse.Object.extend("Participation");
        const q = new Parse.Query(Participation);
        q.equalTo("activity_id", activityPtr);

        const count = await q.count();
        setJoinedCount(count);
      } catch (err) {
        console.error("Error counting participants:", err);
      }
    };

    fetchJoinedCount();
  }, [activity]);

  const maxCapacity = activity?.maxCapacity || 0;

  const handleJoin = async () => {
    if (!activity) return;

    const currentUser = Parse.User.current();
    if (!currentUser) return;

    const Activity = Parse.Object.extend("Activity");
    const activityPtr = new Activity();
    activityPtr.id = activity.objectId;

    const Participation = Parse.Object.extend("Participation");
    const baseQuery = new Parse.Query(Participation);
    baseQuery.equalTo("activity_id", activityPtr);
    baseQuery.equalTo("UserId", currentUser);

    try {
      if (hasJoined) {
        const existing = await baseQuery.first();
        if (existing) {
          await existing.destroy();
          setHasJoined(false);
          setJoinedCount((prev) => Math.max(0, prev - 1));
          setWaitingList(false);
        }
      } else {
        if (joinedCount < maxCapacity) {
          const participation = new Participation();
          participation.set("activity_id", activityPtr);
          participation.set("UserId", currentUser);
          await participation.save();

          setHasJoined(true);
          setJoinedCount((prev) => prev + 1);
        } else {
          setWaitingList(true);
        }
      }
    } catch (err) {
      console.error("Error joining/leaving activity:", err);
    }
  };

  const isFull = joinedCount >= maxCapacity;

  if (loading) return <div>Loading...</div>;
  if (!activity) return <div>Activity not found...</div>;

  const hostValue = host;

  const location = activity.location;

  return (
    <>
      <NavBar />
      <MainContainer>
        <ContentWrapper>
          <HeaderSection
            activity={activity}
            category={category}
            hasJoined={hasJoined}
            joinedCount={joinedCount}
            waitingList={waitingList}
            isFull={isFull}
            handleJoin={handleJoin}
          />

          <CardContainer>
            <TitleCard activity={activity} location={location} />

            {hostValue ? (
              <HostCard
                host={hostValue}
                hostInfo={hostInfo}
                activitiesHosted={activitiesHosted}
              />
            ) : (
              <p>No host data</p>
            )}
          </CardContainer>
        </ContentWrapper>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ActivityDetail;
