import React, { useState, useEffect } from "react";
import Parse from "parse";
import {
  TitleCardContainer,
  CardTitle,
  CardDescription,
} from "../styled/act-detail-style-comp/TitleCard.styled";

import Info from "../../assets/icons_app/info.svg?react";
import Divider from "../../assets/icons_app/divider.svg?react";

const TitleCard = ({ activity }) => {
  const title = activity.get("Title");
  const description = activity.get("description");

  return (
    <TitleCardContainer>
      <CardTitle>
        <Info /> {title}
      </CardTitle>
      <CardDescription> {description}</CardDescription>
      <Divider />
    </TitleCardContainer>
  );
};

export default TitleCard;
