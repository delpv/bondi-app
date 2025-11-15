// src/Components/activity-detail-components/ParticipantsCard.jsx
import React, { useState } from "react";
import {
  ParticipantsCardContainer,
  ParticipantList,
  ParticipantBadge,
  ParticipantImage,
  ParticipantTitle,
  HostLabel,
  ViewMoreButton,
} from "../styled/act-detail-style-comp/Participants.styled";
import Participant from "../../assets/Icons/participant.svg?react";
import Divider from "../../assets/Icons/divider.svg?react";

const ParticipantsCard = ({
  participants = [],
  participantImage,
  participantNumber,
  hostName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // show first 4 when closed
  const visibleParticipants = isOpen ? participants : participants.slice(0, 4);
  const count = participantNumber ?? participants.length;

  return (
    <ParticipantsCardContainer>
      <ParticipantTitle>
        <Participant />
        Participants ({count})
      </ParticipantTitle>

      <Divider />

      <ParticipantList>
        {visibleParticipants.map((p, idx) => (
          <ParticipantBadge key={idx} isHost={p === hostName}>
            <ParticipantImage src={participantImage} alt={p} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span>{p}</span>
              {p === hostName && <HostLabel>Host</HostLabel>}
            </div>
          </ParticipantBadge>
        ))}
      </ParticipantList>

      {participants.length > 4 && (
        <ViewMoreButton onClick={() => setIsOpen((s) => !s)}>
          {isOpen ? "View less" : "View all participants"}
        </ViewMoreButton>
      )}
    </ParticipantsCardContainer>
  );
};

export default ParticipantsCard;
