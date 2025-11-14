import React from "react";
import {
  LocationCardContainer,
  LocationTitle,
  LocationContent,
  LocationImage,
  DirectionButton,
} from "../styled/act-detail-style-comp/LocationCard.styled";

import Walker from "../../assets/Icons/directions_walk.svg?react";
import Icon from "../../assets/Icons/Icon.svg?react";

const LocationCard = ({ location, locationImage }) => (
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

export default LocationCard;
