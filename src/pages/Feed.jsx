import React from "react";

import NavBar from "../Components/feed-components/NavBar.jsx";
import Footer from "../Components/feed-components/Footer.jsx";
import Filter from "../components/feed-components/Filter.jsx";
import Card from "../components/feed-components/Card.jsx";
import YogaImage from "../assets/images/yoga.jpg";
import HostYoga from "../assets/images/olly-yoga.jpg";
import HostVolleyBall from "../assets/images/avatar.png";
import VolleyBallImage from "../assets/images/volleyball.jpg";
import CoffeeImage from "../assets/images/coffee.jpg";
import HostCoffee from "../assets/images/sofia.jpg";
import PotteryImage from "../assets/images/pottery.jpg";
import HostPottery from "../assets/images/mateo.jpg";
import TriviaImage from "../assets/images/trivia.jpg";
import HostTrivia from "../assets/images/clara.jpg";
import BoardGameImage from "../assets/images/boardgame.jpg";
import HostBoardGame from "../assets/images/elias.jpg";

import { MainContainer } from "../Components/styled/MiddleSection/Middle.styled";

import {
  LayoutGrid,
  GridContainer,
} from "../components/styled/feed-style-comp/Grid.styled.jsx";
import {
  SectionHeader,
  LoadMoreButton,
} from "../components/styled/feed-style-comp/Feed.styled.jsx";

export default function Feed() {
  const handleApply = (filters) => {
    console.log("Applied Filters:", filters);
  };

  const activities = [
    {
      id: "yoga-1",
      image: YogaImage,
      date: "Oct 18, 2025",
      priceLabel: "Paid",
      title: "Morning Yoga",
      description:
        "Start your day with a mindful movement and breathing exercises.",
      host: {
        name: "Emma Wilson",
        role: "Host",
        avatar: HostYoga,
      },
      participants: { count: 17, max: 25 },
      location: "The King’s Garden (Konges Have), Copenhagen",
    },
    {
      id: "volley-1",
      image: VolleyBallImage,
      date: "Jul 12, 2026",
      priceLabel: "Free",
      title: "Beach Volleyball Tournament",
      description:
        "Join us for a beach volleyball tournament. All skill level welcome.",
      host: {
        name: "Lena Carter",
        role: "Host",
        avatar: HostVolleyBall,
      },
      participants: { count: 8, max: 16 },
      location: "Amager Strandpark, Amager",
    },
    {
      id: "coffee-1",
      image: CoffeeImage,
      date: "Nov 20, 2025",
      priceLabel: "Free",
      title: "Morning Coffee & Chat",
      description:
        "Casual coffee meetup for newcomers to Copenhagen. Great way to meet new people!",
      host: {
        name: "Sofia Lindborg",
        role: "Host",
        avatar: HostCoffee,
      },
      participants: { count: 5, max: 8 },
      location: "Café Norden, City Center",
    },
    {
      id: "pottery-1",
      image: PotteryImage,
      date: "Oct 29, 2025",
      priceLabel: "Paid",
      title: "Pottery Making Workshop",
      description:
        "Learn the basics of pottery making in this hands-on workshop. All materials provided.",
      host: {
        name: "Mateo Jensen",
        role: "Host",
        avatar: HostPottery,
      },
      participants: { count: 12, max: 15 },
      location: "Copenhagen Contemporary, Refshaleøen",
    },
    {
      id: "trivia-1",
      image: TriviaImage,
      date: "Nov 20, 2025",
      priceLabel: "Free",
      title: "Trivia Night",
      description:
        "Test your knowledge and meet new people at our weekly trivia night!",
      host: {
        name: "Clara Novak",
        role: "Host",
        avatar: HostTrivia,
      },
      participants: { count: 25, max: 25 },
      location: "Café Retro, Vesterbro, Copenhagen",
    },
    {
      id: "boardgame-1",
      image: BoardGameImage,
      date: "Dec 5, 2025",
      priceLabel: "Free",
      title: "Board Game Night",
      description:
        "Join us for a fun evening of classic and modern board games, good vibes, and friendly competition!",
      host: {
        name: "Elias Petersen",
        role: "Host",
        avatar: HostBoardGame,
      },
      participants: { count: 14, max: 25 },
      location: "The Living Room, Indre By",
    },
  ];

  return (
    <>
      <NavBar />
      <MainContainer>
        <LayoutGrid>
          <Filter onApply={handleApply} />

          <div>
            <SectionHeader>
              <h1>Discover Activities</h1>
              <p>Find amazing activities happening around you</p>
            </SectionHeader>

            <GridContainer>
              {activities.map((activity) => (
                <Card
                  key={activity.id}
                  id={activity.id}
                  image={activity.image}
                  date={activity.date}
                  priceLabel={activity.priceLabel}
                  title={activity.title}
                  description={activity.description}
                  host={activity.host}
                  participants={activity.participants}
                  location={activity.location}
                  onJoin={() => console.log("Joined:", activity.id)}
                />
              ))}
              {/* pass is to card */}
            </GridContainer>

            <LoadMoreButton>Load More Activities</LoadMoreButton>
          </div>
        </LayoutGrid>
      </MainContainer>
      <Footer />
    </>
  );
}
