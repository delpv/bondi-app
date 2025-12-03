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
  HostByLabel,
  HostFullName,
  ParticipantsCount,
  ParticipantsIcon,
  LocationIcon,
} from "../styled/feed-style-comp/Card.styled.jsx";
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
  onViewMore,
}) {
  const [hostObject, setHostObject] = useState(undefined);
  // const [isLoading, setIsLoading] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [joined, setJoined] = useState(false);
  const [partNumber, setPartNumber] = useState(undefined);
  const navigate = useNavigate();
  const imHosting = hostObject?.objectId === userId;

  const goToDetail = () => {
    if (!id) return;
    navigate(`/activity/${id}`);
  };

  const getHost = async () => {
    if (!hostId) {
      console.log("No hostId provided");
      return;
    }

    // setIsLoading(true);
    try {
      const hostJson = await await Parse.Cloud.run("getUserById", {
        userId: hostId,
      });

      setHostObject(hostJson);
    } catch (e) {
      console.log(e);
      // } finally {
      //   setIsLoading(false);
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

        if (partJson.UserId.objectId === userId) {
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
  }, []);

  const onKeyGoToDetail = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToDetail();
    }
  };

  const handleToggleJoin = async (e) => {
    e.stopPropagation();
    setIsJoining(true);

    const activityQuery = new Parse.Query("Activity");
    const currentActivity = await activityQuery.get(id);

    try {
      if (!joined && partNumber < maxParticipants) {
        const participationObj = new Parse.Object("Participation");

        participationObj.set("UserId", Parse.User.current());
        participationObj.set("activity_id", currentActivity);

        const result = await participationObj.save();

        setJoined(true);
        setPartNumber((partNumber) => partNumber + 1);

        console.log("New object created with objectId: " + result.id);
      } else {
        const participationQuery = new Parse.Query("Participation");

        participationQuery.equalTo("UserId", Parse.User.current());
        participationQuery.equalTo("activity_id", currentActivity);

        const currentParticipation = await participationQuery.first();
        await currentParticipation.destroy();

        setPartNumber((partNumber) => partNumber - 1);

        setJoined(false);
      }
    } catch (error) {
      console.error("Error: " + error.message);
    } finally {
      setIsJoining(false);
    }
  };

  const getJoinedStatus = () => {
    if (imHosting) {
      return "I'm hosting";
    }

    if (isJoining) {
      if (joined) {
        return "Cancelling...";
      } else {
        return "Joining...";
      }
    } else {
      if (joined) {
        return "Cancel";
      } else if (partNumber === maxParticipants) {
        return "Full";
      }
    }

    return "Join";
  };

  const avatarUrl = hostObject?.user_Info?.profilePictureUrl;

  return (
    <Container
      onClick={goToDetail}
      onKeyDown={onKeyGoToDetail}
      role="button"
      tabIndex={0}
      $isClickable
      aria-label={`Open details for ${title}`}
    >
      <Hero>
        <HeroImage src={image?.url || "default.jpg"} alt={title} />
        <CornerChips>
          {new Intl.DateTimeFormat("en-GB", {
            dateStyle: "short",
          }).format(new Date(date))}
        </CornerChips>
        <CornerChips $variant="right">{priceLabel}</CornerChips>
      </Hero>

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <HostRow>
          {hostObject && (
            <HostInfo>
              <HostAvatar
                src={avatarUrl ? "public/" + avatarUrl : "fallback.jpg"}
                alt={hostObject?.fullName || hostObject?.username}
              />
              <HostMeta>
                <HostByLabel>Hosted by</HostByLabel>
                <HostFullName>{hostObject.fullName}</HostFullName>
              </HostMeta>
            </HostInfo>
          )}

          <Participants title="Participants">
            <ParticipantsIcon size={20} aria-hidden />
            {partNumber !== undefined && (
              <ParticipantsCount>
                {partNumber}/{maxParticipants}
              </ParticipantsCount>
            )}
          </Participants>
        </HostRow>

        <LocationRow>
          <LocationInfo>
            <LocationIcon size={18} aria-hidden />
            <ElypsisText $withIcon>{location}</ElypsisText>
          </LocationInfo>

          <JoinButton
            disabled={
              isJoining ||
              imHosting ||
              (!joined && partNumber === maxParticipants)
            }
            joined={joined ? 1 : 0}
            onClick={handleToggleJoin}
            aria-pressed={joined}
            aria-label={joined ? "Cancel participation" : "Join activity"}
          >
            {getJoinedStatus()}
          </JoinButton>
        </LocationRow>
      </Content>
    </Container>
  );
}
