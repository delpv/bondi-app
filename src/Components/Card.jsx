import React from "react";
import { useState } from "react";
import {
  Container,
  Hero,
  HeroImage,
  CornerChips,
  Content,
  Title,
  Description,
  HostRow,
  HostInfo,
  HostAvatar,
  HostMeta,
  Participants,
  LocationRow,
  LocationInfo,
  JoinButton,
} from "./styled/Card.styled.jsx";
import ParticipantsIcon from "../Assets/Icons/participants.svg?react";
import LocationIcon from "../Assets/Icons/map-pin-green.svg?react";
import { ElypsisText } from "./styled/Card.styled";

export default function Card({
  image,
  date,
  priceLabel,
  title,
  description,
  host,
  participants,
  location,
  onJoin,
}) {
  // new: manage joined state locally
  const [joined, setJoined] = useState(false);

  const handleToggleJoin = () => {
    const next = !joined;
    setJoined(next);
    // call external handler when joined; you can modify to call onJoin/onCancel separately
    if (next) onJoin();
  };

  return (
    <Container>
      <Hero>
        {image && <HeroImage src={image} alt={title} />}
        <CornerChips>{date}</CornerChips>
        <CornerChips variant="right">{priceLabel}</CornerChips>
      </Hero>

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <HostRow>
          <HostInfo>
            <HostAvatar src={host.avatar} alt={host.name} />
            <HostMeta>
              <div style={{ fontWeight: 600 }}>{host.name}</div>
              <div style={{ color: "#9AA0A6", fontSize: "0.9rem" }}>
                {host.role}
              </div>
            </HostMeta>
          </HostInfo>

          <Participants title="Participants">
            {typeof ParticipantsIcon === "string" ? (
              <img
                src={ParticipantsIcon}
                width={20}
                height={20}
                alt=""
                aria-hidden
              />
            ) : (
              <ParticipantsIcon width={20} height={20} aria-hidden />
            )}
            <span style={{ marginLeft: 6 }}>
              {participants.count}/{participants.max}
            </span>
          </Participants>
        </HostRow>

        <LocationRow>
          <LocationInfo>
            {typeof LocationIcon === "string" ? (
              <img
                src={LocationIcon}
                width={18}
                height={18}
                alt=""
                aria-hidden
              />
            ) : (
              <LocationIcon width={18} height={18} aria-hidden />
            )}
            <ElypsisText style={{ marginLeft: 6 }}>{location}</ElypsisText>
          </LocationInfo>
          <JoinButton
            joined={joined ? 1 : 0}
            onClick={handleToggleJoin}
            aria-pressed={joined}
            aria-label={joined ? "Cancel participation" : "Join activity"}
          >
            {joined ? "Cancel" : "Join"}
          </JoinButton>
        </LocationRow>
      </Content>
    </Container>
  );
}
