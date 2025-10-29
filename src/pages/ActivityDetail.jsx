import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { ContentWrapper, MainContainer } from "../Components/styled/Middle.styled.jsx";
import {
  BeforeContainer,
  HeaderSectionContainer,
  HeaderImage,
  HeaderText,
  CardRow,
  CardLeft,
  CardRight,
  Label, 
  JoinButton,
  CardContainer,
  TitleCardContainer,
  CardTitle,
  CardDescription,
  CardWhatToBring,
  BringList,
  BringBadge,
  HostCardContainer,
  HostTitle,
  HostImage,
  HostName,
  HostDescription,
  HostMemberSince,
  HostButton,
  HostInfoContainer,
HostTextContainer,
HostSubtitle,
ActivitiesHostedLabel,
DescriptionContainer,
  ParticipantsCardContainer,
  ParticipantList,
  ParticipantBadge,
  ParticipantImage,
  LocationCardContainer,
  LocationTitle,
  LocationContent,
  LocationImage,
  DirectionButton,
  CountLabel,
  CountNumber
} from "../Components/styled/ActivityDetail.styled.jsx";
import Calendar from "../assets/Icons/calendar.svg?react"; // <-- Add ?react
import Clock from "../assets/Icons/clock.svg?react";
import Location from "../assets/Icons/location.svg?react";
import Info from "../assets/Icons/info.svg?react";
import User from "../assets/Icons/user.svg?react";


// Small back link component
const Before = () => (
  <div style={{ marginBottom: "10px" }}>
    <p><Link to="/feed">← Back to activities</Link></p>
  </div>
);

// Header section with join button
const HeaderSection = ({ activityName }) => {
  const [hasJoined, setHasJoined] = useState(false);
  const [joinedCount, setJoinedCount] = useState(0);

  const handleJoin = () => {
    setHasJoined(prev => !prev);
    setJoinedCount(prev => prev + (hasJoined ? -1 : 1));
  };

  return (
    <HeaderSectionContainer>
      <HeaderImage
        src="https://www.auromere.com/images/Yoga-Pastel-Sun.jpg"
        alt="Activity background"
      />
      <HeaderText>{activityName}</HeaderText>
      <CardRow>
      <CardLeft>
  <Label type="yellow"><Calendar/> Date</Label>
  <Label type="yellow"><Clock /> Time</Label>
  <Label type="yellow"><Location /> Location</Label>
  <Label type="green">Category</Label>
</CardLeft>
        <CardRight>
        <JoinButton $joined={hasJoined} onClick={handleJoin}>
  {hasJoined ? "Joined" : "Join Activity"}
</JoinButton>
<CountLabel>
  <CountNumber>{joinedCount}</CountNumber> people joined
</CountLabel>

        </CardRight>
      </CardRow>
    </HeaderSectionContainer>
  );
};

// Title card
const TitleCard = ({ title, description, whatToBring }) => (
  <TitleCardContainer>
    <CardTitle><Info/>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
    {whatToBring && (
      <CardWhatToBring>
        <h3>What to bring:</h3>
        <BringList>
          {whatToBring.map((item, idx) => (
            <BringBadge key={idx}>{item}</BringBadge>
          ))}
        </BringList>
      </CardWhatToBring>
    )}
  </TitleCardContainer>
);

// Host section
const HostCard = ({ hostName, hostImage, description, memberSince, activitiesHosted }) => (
  <HostCardContainer>
    <HostTitle><User /> Hosted By</HostTitle>

    <HostInfoContainer>
      <HostImage src={hostImage} alt={hostName} />
      <HostTextContainer>
        <HostName>{hostName}</HostName>
        <HostSubtitle>Host</HostSubtitle>
      </HostTextContainer>
    </HostInfoContainer>
      <HostDescription>{description}</HostDescription>
      <DescriptionContainer>
      <HostMemberSince>Member since: {memberSince}</HostMemberSince>
      <ActivitiesHostedLabel>{activitiesHosted} Activities Hosted</ActivitiesHostedLabel>
      <HostButton>See Profile</HostButton>
    </DescriptionContainer>
  </HostCardContainer>
);

// Participants section
const ParticipantsCard = ({ participants, participantImage }) => (
  <ParticipantsCardContainer>
    <h2>Participants</h2>
    <ParticipantList>
      {participants.map((p, idx) => (
        <ParticipantBadge key={idx}>
          <ParticipantImage src={participantImage} alt={p} />
          {p}
        </ParticipantBadge>
      ))}
    </ParticipantList>
  </ParticipantsCardContainer>
);

// Location section
const LocationCard = ({ location, locationImage }) => (
  <LocationCardContainer>
    <LocationTitle>Location</LocationTitle>
    <LocationContent>
      <LocationImage src={locationImage} alt="Location" />
      <p>{location}</p>
      
      <DirectionButton>Get directions</DirectionButton>
    </LocationContent>
  </LocationCardContainer>
);

// Main Activity Detail Page
const ActivityDetail = () => {
  const { id } = useParams(); // get activity ID from URL
  // const activityName = `Activity #${id}`; // dynamic name
  const activityName = "Morning Yoga"; // hardcoded name


  return (
    <>
      <NavBar />
      <MainContainer>
  <ContentWrapper>
     <BeforeContainer>
        <Before />
        </BeforeContainer>
        <HeaderSection activityName={activityName} />
        <CardContainer>
          <TitleCard
            title={activityName}
            description="Morning Yoga is a gentle and energizing activity designed to awaken the body and mind. It typically includes stretching, breathing exercises, and simple yoga poses that improve flexibility, balance, and focus. Practicing yoga in the morning helps reduce stress, boost mood, and set a calm, positive tone for the rest of the day."
            whatToBring={["Yoga mat", "Water bottle", "Small towel", "Good energy"]}
          />
          <HostCard 
            hostName="Alice Johnson" 
            
            hostImage="https://img.pikbest.com/png-images/qiantu/girl-cute-cartoon-small-fresh-avatar-character_2718518.png!sw800" 
            description="Certified yoga instructor with 10 years of experience." 
            memberSince="2018" 
            activitiesHosted={8}
          />
          <ParticipantsCard 
            participants={["John", "Anna", "Kelly", "Nikolas", "Patrick"]}
            participantImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFW7ZDLxu41lI2gB6ExZT7vczi163BrA9WA&s"
          />
          <LocationCard 
            locationImage="https://upload.wikimedia.org/wikipedia/commons/5/5b/Palm_House%2C_Copenhagen_Botanical_Garden.jpg"
            location="Gothersgade 128, 1123 København K"
          />
        </CardContainer>
        </ContentWrapper>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ActivityDetail;
