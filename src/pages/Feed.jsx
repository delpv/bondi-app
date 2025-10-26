import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Filter from "../Components/Filter";
import { MainContainer } from "../Components/styled/Middle.styled.jsx";

export default function Feed() {
  const handleApply = (filters) => {
    console.log("Applied Filters:", filters);
  };
  return (
    <>
      <NavBar />
      <MainContainer
        style={{ display: "flex", gap: 24, alignItems: "flex-start" }}
      >
        <div style={{ width: 320 }}>
          <Filter onApply={handleApply} />
        </div>
        <div style={{ flex: 1 }}>
          <h1>Discover Activities</h1>
          {/* Activity feed content goes here */}
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}
