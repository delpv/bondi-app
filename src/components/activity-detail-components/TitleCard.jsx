import React from "react";
import Parse from "parse";
import {
  TitleCardContainer,
  CardTitle,
  CardDescription,
} from "../styled/act-detail-style-comp/TitleCard.styled";

import Info from "../../assets/icons_app/info.svg?react";

const TitleCard = ({ activity }) => {
  const title = activity.Title;
  const description = activity.description;

  return (
    <TitleCardContainer>
      <CardTitle>
        <Info /> {title}
      </CardTitle>
      <CardDescription> {description}</CardDescription>
    </TitleCardContainer>
  );
};

export default TitleCard;
