import Parse from "parse";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import NavBar from "../components/feed-components/NavBar.jsx";
import Footer from "../components/feed-components/Footer.jsx";

import {
  MainContainer,
  ContentWrapper,
} from "../components/styled/MiddleSection/Middle.styled.jsx";
import HeaderSection from "../components/activity-detail-components/HeaderSection.jsx";
import TitleCard from "../components/activity-detail-components/TitleCard.jsx";
import HostCard from "../components/activity-detail-components/HostCard.jsx";
import ParticipantsCard from "../components/activity-detail-components/ParticipantCard.jsx";
import LocationCard from "../components/activity-detail-components/LocationCard.jsx";

import {
  CardContainer,
  BeforeContainer,
} from "../components/styled/act-detail-style-comp/Common.jsx";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [host, setHost] = useState(null);
  const [hostInfo, setHostInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivityAndHost = async () => {
      try {
        const res = await Parse.Cloud.run("getActivityWithHost", {
          activityId: id,
        });
        setActivity(res.activity); // JSON
        setHost(res.host); // JSON or null
        setHostInfo(res.hostInfo); // JSON or null (if you return it)
      } catch (error) {
        console.error("Error fetching activity+host:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchActivityAndHost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!activity) return <div>Activity not found...</div>;

  const hostValue = host;

  const capacity = activity.maxCapacity;
  const location = activity.location;

  const goBackToFeed = () => {
    navigate(-1);
  };

  return (
    <>
      <NavBar />
      <MainContainer>
        <ContentWrapper>
          <BeforeContainer onClick={goBackToFeed}>
            <p>←</p>
          </BeforeContainer>

          <HeaderSection activity={activity} />
          <CardContainer>
            <TitleCard activity={activity} />

            {hostValue ? (
              <HostCard
                host={hostValue}
                hostInfo={hostInfo}
                activitiesHosted={8}
              />
            ) : (
              <p>No host data</p>
            )}
            <ParticipantsCard
              participantNumber={capacity}
              //hostName="Alice"
              participants={["John", "Alice", "Kelly", "Nikolas", "Patrick"]}
              participantImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFW7ZDLxu41lI2gB6ExZT7vczi163BrA9WA&s"
            />
            <LocationCard
              location={location}
              locationImage="https://upload.wikimedia.org/wikipedia/commons/5/5b/Palm_House%2C_Copenhagen_Botanical_Garden.jpg"
            />
          </CardContainer>
        </ContentWrapper>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ActivityDetail;
