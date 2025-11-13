import React from "react";
import {
  TitleCardContainer,
  CardTitle,
  CardDescription,
  CardWhatToBring,
  BringList,
  BringBadge,
} from "../styled/act-detail-style-comp/TitleCard.styled";

import Info from "../../assets/Icons/info.svg?react";
import Divider from "../../assets/Icons/divider.svg?react";
import List from "../../assets/Icons/list.svg?react";

const TitleCard = ({ title, description, whatToBring }) => (
  <TitleCardContainer>
    <CardTitle>
      <Info /> {title}
    </CardTitle>
    <CardDescription>{description}</CardDescription>
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

export default TitleCard;
