import React, { useState, useEffect } from "react";
import Parse from "parse";

import {
  ParticipantsCardContainer,
  ParticipantList,
  ParticipantBadge,
  ParticipantImage,
  ParticipantTitle,
  HostLabel,
  ViewMoreButton,
  ParticipantInfo,
} from "../styled/act-detail-style-comp/Participants.styled";
import Participant from "../../assets/icons_app/participant.svg?react";

const ParticipantsCard = ({ activityId, participantImage, hostName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [maxCapacity, setMaxCapacity] = useState(null);

  useEffect(() => {
    if (!activityId) return;

    const fetchParticipants = async () => {
      setIsLoading(true);
      try {
        // 1) Get the Activity object (with maxCapacity)
        const Activity = Parse.Object.extend("Activity");
        const activityQuery = new Parse.Query(Activity);
        const activity = await activityQuery.get(activityId);

        // save maxCapacity from Activity
        setMaxCapacity(activity.get("maxCapacity"));

        // 2) Query Participation for this activity
        const participationQuery = new Parse.Query("Participation");
        participationQuery.equalTo("activity_id", activity); // pointer
        participationQuery.include("user_id");

        const results = await participationQuery.find();

        const names = results.map((p) => {
          const user = p.get("user_id");
          return user
            ? user.get("fullName") || user.get("username")
            : "Unknown";
        });

        setParticipants(names);
      } catch (e) {
        console.error("Error fetching participants:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchParticipants();
  }, [activityId]);

  const visibleParticipants = isOpen ? participants : participants.slice(0, 4);
  const count = participants.length;

  return (
    <ParticipantsCardContainer>
      <ParticipantTitle>
        <Participant />
        Participants ({participants.length}/{maxCapacity})
      </ParticipantTitle>

      {isLoading ? (
        <p>Loading participants...</p>
      ) : (
        <ParticipantList>
          {visibleParticipants.map((p, idx) => (
            <ParticipantBadge key={idx} $isHost={p === hostName}>
              <ParticipantImage src={participantImage} alt={p} />
              <ParticipantInfo>
                <span>{p}</span>
                {p === hostName && <HostLabel>Host</HostLabel>}
              </ParticipantInfo>
            </ParticipantBadge>
          ))}
        </ParticipantList>
      )}
      {participants.length > 4 && (
        <ViewMoreButton onClick={() => setIsOpen((s) => !s)}>
          {isOpen ? "View less" : "View all participants"}
        </ViewMoreButton>
      )}
    </ParticipantsCardContainer>
  );
};

export default ParticipantsCard;
