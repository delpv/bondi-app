import React, { useState, useEffect } from "react";
import Parse from "parse";
import { useAuthContext } from "../../context/AuthContext";
import {
  ActivityStatusContainer,
  HeaderFrame,
  TitleSection,
  SectionTitle,
  StatusContent,
  StatusItem,
  NumberContainer,
  StatusNumber,
  TextContainer,
  StatusText,
} from "../styled/profile-style-comp/ActivityStatus.styled";

const ActivityStatus = () => {
  const [joinedCount, setJoinedCount] = useState(0);
  const [hostedCount, setHostedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuthContext();

  //  fetch joined activities count
  const fetchJoinedActivitiesCount = async () => {
    try {
      const currentUser = Parse.User.current();
      if (!currentUser) return 0;

      const participationQuery = new Parse.Query("Participation");
      participationQuery.equalTo("UserId", currentUser);
      const count = await participationQuery.count();
      return count;
    } catch (error) {
      console.error("Error fetching joined activities count:", error);
      return 0;
    }
  };

  // fetch hosted activities count
  const fetchHostedActivitiesCount = async () => {
    try {
      const currentUser = Parse.User.current();
      if (!currentUser) return 0;

      const activityQuery = new Parse.Query("Activity");
      activityQuery.equalTo("host_ID", currentUser);
      const count = await activityQuery.count();
      return count;
    } catch (error) {
      console.error("Error fetching hosted activities count:", error);
      return 0;
    }
  };

  // Fetch activity counts when component mounts
  useEffect(() => {
    const fetchActivityCounts = async () => {
      if (!isAuthenticated) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const [joined, hosted] = await Promise.all([
          fetchJoinedActivitiesCount(),
          fetchHostedActivitiesCount(),
        ]);
        setJoinedCount(joined);
        setHostedCount(hosted);
      } catch (error) {
        console.error("Error fetching activity counts:", error);
        setJoinedCount(0);
        setHostedCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityCounts();
  }, [isAuthenticated]);

  const statusData = [
    {
      id: 1,
      number: loading ? "..." : joinedCount.toString(),
      text: "Activities Joined",
    },
    {
      id: 2,
      number: loading ? "..." : hostedCount.toString(),
      text: "Activities Hosted",
    },
  ];

  return (
    <ActivityStatusContainer>
      <HeaderFrame>
        <TitleSection>
          <SectionTitle>Activity Status</SectionTitle>
        </TitleSection>
      </HeaderFrame>

      <StatusContent>
        {statusData.map((status) => (
          <StatusItem key={status.id}>
            <NumberContainer>
              <StatusNumber>{status.number}</StatusNumber>
            </NumberContainer>
            <TextContainer>
              <StatusText>{status.text}</StatusText>
            </TextContainer>
          </StatusItem>
        ))}
      </StatusContent>
    </ActivityStatusContainer>
  );
};

export default ActivityStatus;
