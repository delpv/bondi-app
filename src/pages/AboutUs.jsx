import React from "react";
import Navbar from "../components/feed-components/Navbar";
import Footer from "../components/feed-components/Footer";
import {
  AboutUsWrapper,
  ContentContainer,
  Title,
  Paragraph,
  Tagline,
} from "../components/styled/feed-style-comp/AboutUs.styled.jsx";

function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsWrapper>
        <ContentContainer>
          <Title>Hi there!</Title>

          <Paragraph>
            Bondi is a warm, welcoming social app designed to bring people
            together through shared interests and real-life activities — right
            here in Copenhagen.
          </Paragraph>

          <Paragraph>
            Moving to a new city or country can feel overwhelming. New culture,
            new routines, new people — and no clear place to start. Whether
            you're a newcomer, an expat, someone feeling a bit lonely, or a
            local looking to expand your circle, Bondi makes it easier to find
            your people and feel at home.
          </Paragraph>

          <Paragraph>
            Unlike other social apps that feel cluttered, overwhelming, or stuck
            behind screens, Bondi is built with one clear purpose: to help you
            get offline and create genuine human connections. The app connects
            people through shared interests and activities, encouraging real
            meetups, real conversations, and real friendships.
          </Paragraph>

          <Paragraph>
            Bondi is all about meaningful moments — grabbing a coffee with
            someone new, joining a group walk, exploring the city together, or
            discovering a shared passion you didn't know you had. It's not about
            endless scrolling or awkward small talk. It's about bonding,
            laughing, and creating unforgettable memories.
          </Paragraph>

          <Paragraph>
            At its core, Bondi believes that no one should feel alone in a city
            full of life. By keeping things simple, organized, and intuitive,
            the app removes the uncertainty of where to go, who to meet, and how
            to begin. Bondi opens the door — you just have to step outside.
          </Paragraph>

          <Tagline>Bondi. Less screen time. More real connections.</Tagline>
        </ContentContainer>
      </AboutUsWrapper>
      <Footer />
    </>
  );
}

export default AboutUs;
