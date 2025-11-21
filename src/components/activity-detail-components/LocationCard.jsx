import React, { useEffect } from "react";
import {
  LocationCardContainer,
  LocationTitle,
  LocationContent,
  LocationImage,
  DirectionButton,
} from "../styled/act-detail-style-comp/LocationCard.styled";

import Walker from "../../assets/icons_app/directions_walk.svg?react";
import Icon from "../../assets/icons_app/icon_icon.svg?react";

const LocationCard = ({ location, locationImage }) => {
  if (!location) return <div>Loading...</div>;

  return (
    <LocationCardContainer>
      <LocationTitle>
        <Icon />
        Location
      </LocationTitle>
      <LocationContent>
        <LocationImage src={locationImage} alt="Location" />
        <p>{location}</p>
        <DirectionButton>
          <Walker />
          Get directions
        </DirectionButton>
      </LocationContent>
    </LocationCardContainer>
  );
};

export default LocationCard;
