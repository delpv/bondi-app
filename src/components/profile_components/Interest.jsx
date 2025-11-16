import React, { useState, useRef, useEffect } from 'react';
import EditIcon from "../../assets/Icons/edit.svg?react";
import {
  InterestContainer,
  InterestFrame,
  InterestTitle,
  EditButton,
  InterestChipsContainer,
  InterestChip,
  ChipText,
  EditDropdownContainer,
  EditDropdown,
  EditDropdownOption,
  ChipInput,
  RemoveModeTooltip
} from "../styled/profile-style-comp/Interest.styled";

const Interest = () => {

  const [interests, setInterests] = useState([
    { id: 1, text: "Food & Dining", color: "coral" },
    { id: 2, text: "Dance", color: "peach" },
    { id: 3, text: "Music", color: "mint" },
    { id: 4, text: "Travel", color: "orange" },
    { id: 5, text: "Sports", color: "blue" },
    { id: 6, text: "Art", color: "purple" },
    { id: 7, text: "Technology", color: "green" }
  ]);

  const [showEditOptions, setShowEditOptions] = useState(false);
  const [isRemoveMode, setIsRemoveMode] = useState(false);
  const [editingChip, setEditingChip] = useState(null);
  const [hoveredOption, setHoveredOption] = useState('add');
  const dropdownRef = useRef(null);

  const colors = ['coral', 'peach', 'mint', 'orange', 'blue', 'purple', 'green'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowEditOptions(false);
        setHoveredOption('add');
      }
    };

    if (showEditOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEditOptions]);

  const handleEditClick = () => {
    setShowEditOptions(!showEditOptions);
    setIsRemoveMode(false);
    if (!showEditOptions) {
      setHoveredOption('add');
    }
  };

  const handleAddNew = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newChip = {
      id: Date.now(),
      text: "",
      color: randomColor
    };
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
      setInterests(interests.filter(interest => interest.id !== chipId));
      setIsRemoveMode(false);
    }
  };

  const handleChipTextChange = (chipId, newText) => {
    setInterests(interests.map(interest =>
      interest.id === chipId ? { ...interest, text: newText } : interest
    ));
  };

  const handleChipTextBlur = () => {
    setEditingChip(null);
  };

  const handleChipKeyDown = (e, chipId) => {
    if (e.key === 'Enter') {
      setEditingChip(null);
    }
  };

  return (
    <InterestContainer>
      <InterestFrame>
        <InterestTitle>Interests</InterestTitle>
        <EditDropdownContainer>
          <EditButton onClick={handleEditClick}>
            <EditIcon />
          </EditButton>

          {showEditOptions && (
            <EditDropdown ref={dropdownRef}>
              <EditDropdownOption
                onClick={handleAddNew}
                onMouseEnter={() => setHoveredOption('add')}
                isHovered={hoveredOption === 'add'}
              >
                Add new
              </EditDropdownOption>
              <EditDropdownOption
                onClick={handleRemove}
                onMouseEnter={() => setHoveredOption('remove')}
                isHovered={hoveredOption === 'remove'}
              >
                Remove
              </EditDropdownOption>
            </EditDropdown>
          )}
        </EditDropdownContainer>
      </InterestFrame>

      <InterestChipsContainer>
        {interests.map((interest) => (
          <InterestChip
            key={interest.id}
            color={interest.color}
            onClick={() => handleChipClick(interest.id)}
            isRemoveMode={isRemoveMode}
          >
            {editingChip === interest.id ? (
              <ChipInput
                type="text"
                value={interest.text}
                onChange={(e) => handleChipTextChange(interest.id, e.target.value)}
                onBlur={handleChipTextBlur}
                onKeyDown={(e) => handleChipKeyDown(e, interest.id)}
                autoFocus
                placeholder="Enter interest..."
              />
            ) : (
              <ChipText>{interest.text || "New Interest"}</ChipText>
            )}
          </InterestChip>
        ))}
      </InterestChipsContainer>

      {isRemoveMode && (
        <RemoveModeTooltip>
          Click on a chip to remove it
        </RemoveModeTooltip>
      )}
    </InterestContainer>
  );
};

export default Interest;