import React, { useEffect } from "react";
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
import ParticipantsIcon from "../../assets/icons/participants.svg?react";
import LocationIcon from "../../assets/icons/map-pin-green.svg?react";
import Parse from "parse";

export default function Card({
  id,
  image,
  date,
  priceLabel,
  title,
  description,
  hostId,
  maxParticipants,
  participantCount,
  location,
  onJoin = () => {},
}) {
  const [hostObject, setHostObject] = useState(undefined);
  // new: manage joined state locally
  const [joined, setJoined] = useState(false);
  const navigate = useNavigate();

  const goToDetail = () => {
    if (!id) return;
    navigate(`/activity/${id}`);
  };

  const getHost = async () => {
    const hostQuery = new Parse.Query("USER");

    try {
      const hoestedBy = await hostQuery.get(hostId);
      const hostJson = await hoestedBy.toJSON();

      setHostObject(hostJson);
      console.log(hostJson);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getHost();
  }, []);

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
        <HeroImage src={"public/" + image || "default.jpg"} alt={title} />
        <CornerChips>
          {new Intl.DateTimeFormat("en-GB", {
            dateStyle: "short",
          }).format(new Date(date))}
        </CornerChips>
        <CornerChips variant="right">{priceLabel}</CornerChips>
      </Hero>

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <HostRow>
          {hostObject && (
            <HostInfo>
              <HostAvatar
                src={"public/" + hostObject.profilePictureUrl}
                alt={hostObject.username}
              />
              <HostMeta>
                <div style={{ fontWeight: 600 }}>Hosted by</div>
                <div style={{ color: "#9AA0A6", fontSize: "0.9rem" }}>
                  {hostObject.fullName}
                </div>
              </HostMeta>
            </HostInfo>
          )}

          <Participants title="Participants">
            <ParticipantsIcon width={20} height={20} aria-hidden />
            <span style={{ marginLeft: 6 }}>
              {participantCount}/{maxParticipants}
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
