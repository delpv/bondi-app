import React, { useState } from "react";
import NavBar from "../Components/feed-components/NavBar.jsx";
import Footer from "../Components/feed-components/Footer.jsx";

import {
  MainContainer,
  ContentWrapper,
} from "../Components/styled/MiddleSection/Middle.styled.jsx";
import Before from "../Components/activity-detail-components/Before";
import HeaderSection from "../Components/activity-detail-components/HeaderSection";
import TitleCard from "../Components/activity-detail-components/TitleCard";
import HostCard from "../Components/activity-detail-components/HostCard";
import ParticipantsCard from "../Components/activity-detail-components/ParticipantCard";
import LocationCard from "../Components/activity-detail-components/LocationCard";

import { CardContainer } from "../Components/styled/act-detail-style-comp/Common";

const ActivityDetail = () => {
  const activityName = "Morning Yoga";

  return (
    <>
      <NavBar />
      <MainContainer>
        <ContentWrapper>
          <Before />
          <HeaderSection activityName={activityName} />
          <CardContainer>
            <TitleCard
              title={activityName}
              description="Start your day with a peaceful yoga session on the beautiful garden. This morning class is perfect for all levels, from beginners to experienced yogis. We'll focus on gentle flow movements and breathing exercises while enjoying the ocean breeze and sunrise.

              Please bring your own yoga mat and water bottle. We'll provide blocks and straps if needed. The session will be held rain or shine under our covered pavilion area.."
              whatToBring={[
                "Yoga mat",
                "Water bottle",
                "Small towel",
                "Good energy",
                "Plastic Bag",
              ]}
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
