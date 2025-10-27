import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Filter from "../Components/Filter";
import Card from "../Components/Card";
import YogaImage from "../assets/Images/yoga.jpg";
import HostYoga from "../assets/Images/olly-yoga.jpg";
import HostVolleyBall from "../assets/Images/avatar.png";
import VolleyBallImage from "../assets/Images/volleyball.jpg";
import CoffeeImage from "../assets/Images/coffee.jpg";
import HostCoffee from "../assets/Images/sofia.jpg";
import PotteryImage from "../assets/Images/pottery.jpg";
import HostPottery from "../assets/Images/mateo.jpg";
import TriviaImage from "../assets/Images/trivia.jpg";
import HostTrivia from "../assets/Images/clara.jpg";
import BoardGameImage from "../assets/Images/boardgame.jpg";
import HostBoardGame from "../assets/Images/elias.jpg";
import { MainContainer } from "../Components/styled/Middle.styled.jsx";
import { LayoutGrid } from "../Components/styled/Grid.styled.jsx";
import { GridContainer } from "../Components/styled/Grid.styled.jsx";
import { SectionHeader } from "../Components/styled/Feed.styled.jsx";
import { LoadMoreButton } from "../Components/styled/Feed.styled.jsx";

export default function Feed() {
  const handleApply = (filters) => {
    console.log("Applied Filters:", filters);
  };

  const YogaCard = {
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
  };

  const VolleyBallCard = {
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
  };

  const CoffeeCard = {
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
  };

  const PotteryWorkshopCard = {
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
  };

  const TriviaCard = {
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
  };

  const BoardGameCard = {
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
  };

  return (
    <>
      <NavBar />
      <MainContainer
        style={{ display: "flex", gap: 40, alignItems: "flex-start" }}
      >
        <LayoutGrid>
          <div style={{ width: 320 }}>
            <Filter onApply={handleApply} />
          </div>

          <div style={{ flex: 1 }}>
            <SectionHeader>
              <h1>Discover Activities</h1>
              <p>Find amazing activities happening around you</p>
            </SectionHeader>

            <GridContainer>
              <Card {...VolleyBallCard} />
              <Card {...CoffeeCard} />
              <Card {...PotteryWorkshopCard} />
              <Card {...YogaCard} />
              <Card {...TriviaCard} />
              <Card {...BoardGameCard} />
            </GridContainer>

            <LoadMoreButton>Load More Activities</LoadMoreButton>
          </div>
        </LayoutGrid>
      </MainContainer>
      <Footer />
    </>
  );
}
