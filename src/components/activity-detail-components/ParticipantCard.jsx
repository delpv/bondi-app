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

  useEffect(() => {
    if (!activityId) return;

    const fetchParticipants = async () => {
      setIsLoading(true);
      try {
        const Activity = Parse.Object.extend("Activity");
        const activityPtr = Activity.createWithoutData(activityId);

        const query = new Parse.Query("Participation");
        query.equalTo("activity_id", activityPtr);
        query.include("user_id"); // if you have a user pointer

        const results = await query.find();

        // adapt this to your Participation schema:
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
        Participants ({count})
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
