import React from "react";
import {
  InterestChipCoral,
  InterestChipPeach,
  InterestChipMint,
  InterestChipOrange,
  InterestChipBlue,
  InterestChipPurple,
  InterestChipGreen,
  InterestChipDefault,
  ChipText,
  ChipInput,
} from "../styled/profile-style-comp/Interest.styled";

const CHIP_COMPONENTS = {
  coral: InterestChipCoral,
  peach: InterestChipPeach,
  mint: InterestChipMint,
  orange: InterestChipOrange,
  blue: InterestChipBlue,
  purple: InterestChipPurple,
  green: InterestChipGreen,
};

const InterestChip = ({
  interest,
  isEditing,
  isRemoveMode,
  onClick,
  onTextChange,
  onTextBlur,
  onKeyDown,
}) => {
  const ChipComponent = CHIP_COMPONENTS[interest.color] || InterestChipDefault;

  return (
    <ChipComponent onClick={onClick} isRemoveMode={isRemoveMode}>
      {isEditing ? (
        <ChipInput
          type="text"
          value={interest.text}
          onChange={onTextChange}
          onBlur={onTextBlur}
          onKeyDown={onKeyDown}
          autoFocus
          placeholder="Enter interest..."
        />
      ) : (
        <ChipText>{interest.text || "New Interest"}</ChipText>
      )}
    </ChipComponent>
  );
};

export default InterestChip;
