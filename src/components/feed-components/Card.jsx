import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  ElypsisText,
} from "../styled/feed-style-comp/Card.styled.jsx";
import ParticipantsIcon from "../../assets/icons_app/participants.svg?react";
import LocationIcon from "../../assets/icons_app/map-pin-green.svg?react";

export default function Card({
  id,
  image,
  date,
  priceLabel,
  title,
  description,
  host,
  participants,
  location,
  onJoin = () => {},
}) {
  // new: manage joined state locally
  const [joined, setJoined] = useState(false);
  const navigate = useNavigate();

  const goToDetail = () => {
    if (!id) return;
    navigate(`/activity/${id}`);
  };

  const onKeyGoToDetail = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToDetail();
    }
  };

  const handleToggleJoin = (e) => {
    e.stopPropagation();
    const next = !joined;
    setJoined(next);
    // call external handler when joined; you can modify to call onJoin/onCancel separately
    if (next) onJoin();
  };

  return (
    <Container
      onClick={goToDetail}
      onKeyDown={onKeyGoToDetail}
      role="button"
      tabIndex={0}
      style={{ cursor: "pointer" }}
      aria-label={`Open details for ${title}`}
    >
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
            <ParticipantsIcon width={20} height={20} aria-hidden />
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
