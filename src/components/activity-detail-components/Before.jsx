import React from "react";
import { useNavigate } from "react-router"; // from react-router
import { BeforeContainer } from "../styled/act-detail-style-comp/Before.styled";

const Before = () => {
  const navigate = useNavigate();

  const goBackToFeed = () => {
    navigate("/feed"); // your feed route
  };

  return (
    <BeforeContainer onClick={goBackToFeed}>
      <p>← Back to activities</p>
    </BeforeContainer>
  );
};

export default Before;
