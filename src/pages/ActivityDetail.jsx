import Parse from "../utils/parseConfig.js"; // use the initialized Parse
import React, { useState, useEffect } from "react";

import NavBar from "../components/feed-components/NavBar.jsx";
import Footer from "../components/feed-components/Footer.jsx";

import {
  MainContainer,
  ContentWrapper,
} from "../components/styled/MiddleSection/Middle.styled.jsx";
import Before from "../components/activity-detail-components/Before";
import HeaderSection from "../components/activity-detail-components/HeaderSection";
import TitleCard from "../components/activity-detail-components/TitleCard";
import HostCard from "../components/activity-detail-components/HostCard";
import ParticipantsCard from "../components/activity-detail-components/ParticipantCard";
import LocationCard from "../components/activity-detail-components/LocationCard";

import { CardContainer } from "../components/styled/act-detail-style-comp/Common";

const ActivityDetail = () => {
  const [activity, setActivity] = useState(null);

  // Manually set the objectId of the activity you want to display
  const activityObjectId = "XNGNoKPR5r";

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const Activity = Parse.Object.extend("Activity");
        const query = new Parse.Query(Activity);
        const result = await query.get(activityObjectId); // fetch from Back4App
        setActivity(result);
      } catch (error) {
        console.error("Error fetching activity:", error);
      }
    };

    fetchActivity();
  }, []);

  if (!activity) return <div>Loading...</div>;

  return (
    <>
      <NavBar />
      <MainContainer>
        <ContentWrapper>
          <Before />

          <HeaderSection />
          <CardContainer>
            <TitleCard
              title={activity.get("Title")}
              description={activity.get("description")}
              whatToBring={
                activity.get("whatToBring") || [
                  "Yoga mat",
                  "Water bottle",
                  "Good energy",
                ]
              }
            />
            <HostCard
              hostName="Alice Johnson"
              description="Certified yoga instructor with 8+ years of experience. I love bringing people together through mindful movement and creating a welcoming community for everyone."
              memberSince="2018"
              activitiesHosted={8}
            />
            <ParticipantsCard
              participantNumber={12}
              hostName="Alice"
              participants={["John", "Alice", "Kelly", "Nikolas", "Patrick"]}
              participantImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFW7ZDLxu41lI2gB6ExZT7vczi163BrA9WA&s"
            />
            <LocationCard
              location="Gothersgade 128, 1123 København K"
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
