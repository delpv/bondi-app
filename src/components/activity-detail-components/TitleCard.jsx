import React, { useState, useEffect } from "react";
import Parse from "parse";
import {
  TitleCardContainer,
  CardTitle,
  CardDescription,
  CardWhatToBring,
  BringList,
  BringBadge,
} from "../styled/act-detail-style-comp/TitleCard.styled";

import Info from "../../assets/icons_app/info.svg?react";
import Divider from "../../assets/icons_app/divider.svg?react";
import List from "../../assets/icons_app/list.svg?react";

const TitleCard = ({activity, whatToBring }) => {
  const title = activity.get("Title");
  const description=activity.get("description");

return(
  <TitleCardContainer>
    <CardTitle>
      <Info /> {title}
    </CardTitle>
    <CardDescription> {description}</CardDescription>
    <Divider />
    {whatToBring && (
      <CardWhatToBring>
        <h3>
          <List />
          What to bring:
        </h3>
        <BringList>
          {whatToBring.map((item, idx) => (
            <BringBadge key={idx}>{item}</BringBadge>
          ))}
        </BringList>
      </CardWhatToBring>
    )}
  </TitleCardContainer>
);
};

export default TitleCard;
