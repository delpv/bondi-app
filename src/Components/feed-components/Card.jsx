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
  location,
  userId,
}) {
  const [hostObject, setHostObject] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const [partNumber, setPartNumber] = useState(undefined);
  const navigate = useNavigate();

  const goToDetail = () => {
    if (!id) return;
    navigate(`/activity/${id}`);
  };

  const getHost = async () => {
    const hostQuery = new Parse.Query("USER");
    setIsLoading(true);
    try {
      const hoestedBy = await hostQuery.get(hostId);
      const hostJson = await hoestedBy.toJSON();

      setHostObject(hostJson);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getTotalParticipants = async () => {
    try {
      const activityQuery = new Parse.Query("Activity");
      const currentActivity = await activityQuery.get(id);

      const participationQuery = new Parse.Query("Participation");

      participationQuery.equalTo("activity_id", currentActivity);

      const allParticipants = await participationQuery.find();

      const participants = allParticipants.map((part) => {
        const partJson = part.toJSON();
        if (partJson.UserID.objectId === userId) {
          setJoined(true);
        }

        return part.toJSON();
      });

      setPartNumber(participants.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const makeApiCalls = async () => {
      await getHost();
      await getTotalParticipants();
    };
    makeApiCalls();
    // TODO: check if user has joined activities.
    // TODO: On join/cancel click removes user
  }, []);

  const onKeyGoToDetail = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToDetail();
    }
  };

  const handleToggleJoin = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    const userQuery = new Parse.Query("USER");
    const currentUser = await userQuery.get(userId);

    const activityQuery = new Parse.Query("Activity");
    const currentActivity = await activityQuery.get(id);

    try {
      if (!joined && partNumber < maxParticipants) {
        const participationObj = new Parse.Object("Participation");

        participationObj.set("UserID", currentUser);
        participationObj.set("activity_id", currentActivity);

        const result = await participationObj.save();

        setJoined(true);
        setPartNumber((partNumber) => partNumber + 1);

        console.log("New object created with objectId: " + result.id);
      } else {
        const participationQuery = new Parse.Query("Participation");

        participationQuery.equalTo("UserID", currentUser);
        participationQuery.equalTo("activity_id", currentActivity);

        const currentParticipation = await participationQuery.first();
        await currentParticipation.destroy();

        setPartNumber((partNumber) => partNumber - 1);

        setJoined(false);
      }
    } catch (error) {
      console.error("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
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
            {partNumber !== undefined && (
              <span style={{ marginLeft: 6 }}>
                {partNumber}/{maxParticipants}
              </span>
            )}
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
            disabled={isLoading || (!joined && partNumber === maxParticipants)}
            joined={joined ? 1 : 0}
            onClick={handleToggleJoin}
            aria-pressed={joined}
            aria-label={joined ? "Cancel participation" : "Join activity"}
          >
            {joined
              ? "Cancel"
              : partNumber === maxParticipants
                ? "Full"
                : "Join"}
          </JoinButton>
        </LocationRow>
      </Content>
    </Container>
  );
}
