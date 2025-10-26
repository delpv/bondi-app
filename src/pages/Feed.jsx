import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { MainContainer } from "../Components/styled/Middle.styled.jsx";

export default function Feed() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <div style={{ maxWidth: "auto", width: "100%" }}>
          <h1>Discover Activities</h1>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}
