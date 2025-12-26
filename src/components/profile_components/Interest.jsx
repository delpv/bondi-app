import React, { useState } from "react";
import InterestChip from "./InterestChip";
import EditDropdown from "./EditButton";
import {
  InterestContainer,
  InterestFrame,
  InterestTitle,
  InterestChipsContainer,
  RemoveModeTooltip,
} from "../styled/profile-style-comp/Interest.styled";

const COLORS = ["coral", "peach", "mint", "orange", "blue", "purple", "green"];

const INITIAL_INTERESTS = [
  { id: 1, text: "Food & Dining", color: "coral" },
  { id: 2, text: "Dance", color: "peach" },
  { id: 3, text: "Music", color: "mint" },
  { id: 4, text: "Travel", color: "orange" },
  { id: 5, text: "Sports", color: "blue" },
  { id: 6, text: "Art", color: "purple" },
  { id: 7, text: "Technology", color: "green" },
];

const Interest = () => {
  const [interests, setInterests] = useState(INITIAL_INTERESTS);
  const [showEditOptions, setShowEditOptions] = useState(false);
  const [isRemoveMode, setIsRemoveMode] = useState(false);
  const [editingChip, setEditingChip] = useState(null);

  const handleAddNew = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const newChip = { id: Date.now(), text: "", color: randomColor };

    setInterests([...interests, newChip]);
    setEditingChip(newChip.id);
    setShowEditOptions(false);
    setIsRemoveMode(false);
  };

  const handleRemove = () => {
    setIsRemoveMode(true);
    setShowEditOptions(false);
  };

  const handleChipClick = (chipId) => {
    if (isRemoveMode) {
      setInterests(interests.filter((interest) => interest.id !== chipId));
      setIsRemoveMode(false);
    }
  };

  const handleChipTextChange = (chipId, newText) => {
    setInterests(
      interests.map((interest) =>
        interest.id === chipId ? { ...interest, text: newText } : interest
      )
    );
  };

  const handleChipTextBlur = (chipId) => {
    const chip = interests.find((interest) => interest.id === chipId);
    if (chip && !chip.text?.trim()) {
      setInterests(interests.filter((interest) => interest.id !== chipId));
    }
    setEditingChip(null);
  };

  const handleChipKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditingChip(null);
    }
  };

  const handleDropdownToggle = (isOpen) => {
    setShowEditOptions(isOpen);
    if (!isOpen) setIsRemoveMode(false);
  };

  return (
    <InterestContainer>
      <InterestFrame>
        <InterestTitle>Interests</InterestTitle>
        <EditDropdown
          isOpen={showEditOptions}
          onClickEditButton={handleDropdownToggle}
          setShowEditOptions={setShowEditOptions}
          onAddNew={handleAddNew}
          onRemove={handleRemove}
        />
      </InterestFrame>

      <InterestChipsContainer>
        {interests.map((interest) => (
          <InterestChip
            key={interest.id}
            interest={interest}
            isEditing={editingChip === interest.id}
            isRemoveMode={isRemoveMode}
            onClick={() => handleChipClick(interest.id)}
            onTextChange={(e) =>
              handleChipTextChange(interest.id, e.target.value)
            }
            onTextBlur={() => handleChipTextBlur(interest.id)}
            onKeyDown={handleChipKeyDown}
          />
        ))}
      </InterestChipsContainer>

      {isRemoveMode && (
        <RemoveModeTooltip>Click on an interest to remove it</RemoveModeTooltip>
      )}
    </InterestContainer>
  );
};

export default Interest;
