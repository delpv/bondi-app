import Parse from "parse"; // use the initialized Parse
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import NavBar from "../components/feed-components/NavBar.jsx";
import Footer from "../components/feed-components/Footer.jsx";

import {
  MainContainer,
  ContentWrapper,
} from "../components/styled/MiddleSection/Middle.styled.jsx";
import Before from "../components/activity-detail-components/Before.jsx";
import HeaderSection from "../components/activity-detail-components/HeaderSection.jsx";
import TitleCard from "../components/activity-detail-components/TitleCard.jsx";
import HostCard from "../components/activity-detail-components/HostCard.jsx";
import ParticipantsCard from "../components/activity-detail-components/ParticipantCard.jsx";
import LocationCard from "../components/activity-detail-components/LocationCard.jsx";

import { CardContainer } from "../components/styled/act-detail-style-comp/Common.jsx";

const ActivityDetail = () => {
  const [activity, setActivity] = useState(null);
  const { id } = useParams();
  console.log("useParams id:", id, typeof id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const Activity = Parse.Object.extend("Activity");
        const query = new Parse.Query(Activity);
        query.include("host_ID"); // match pointer
        const result = await query.get(id); // id from URL
        console.log("Fetched activity:", result.toJSON());
        setActivity(result);
      } catch (error) {
        console.error("Error fetching activity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!activity) return <div>Activity not found...</div>;

  const location = activity.get("location");

  return (
    <>
      <NavBar />
      <MainContainer>
        <ContentWrapper>
          <Before />

          <HeaderSection activity={activity} />
          <CardContainer>
            <TitleCard
              activity={activity}
              whatToBring={
                activity.get("whatToBring") || [
                  "Yoga mat",
                  "Water bottle",
                  "Good energy",
                  "Sunshine",
                ]
              }
            />
            <HostCard activitiesHosted={8} />
            <ParticipantsCard
              participantNumber={12}
              hostName="Alice"
              participants={["John", "Alice", "Kelly", "Nikolas", "Patrick"]}
              participantImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFW7ZDLxu41lI2gB6ExZT7vczi163BrA9WA&s"
            />
            <LocationCard
              location={activity.get("location")}
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
