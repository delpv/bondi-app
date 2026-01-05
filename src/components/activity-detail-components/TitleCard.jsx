import React, { useState, useEffect } from "react";
import Parse from "parse";
import {
  TitleCardContainer,
  CardTitle,
  CardDescription,
  DirectionLabel,
} from "../styled/act-detail-style-comp/TitleCard.styled";

import Info from "../../assets/icons_app/info.svg?react";

const TitleCard = ({ activity }) => {
  const title = activity.Title;
  const description = activity.description;
  const address = activity.location || "";

  const openGoogleMaps = () => {
    if (!address) return;
    const destination = encodeURIComponent(address);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };

  return (
    <TitleCardContainer>
      <CardTitle>
        <Info /> {title}
      </CardTitle>
      <CardDescription> {description}</CardDescription>
      <DirectionLabel onClick={openGoogleMaps}>Get Direction</DirectionLabel>
    </TitleCardContainer>
  );
};

export default TitleCard;
