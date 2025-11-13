import React, { useState, useRef, useEffect } from 'react';
import {
  InterestContainer,
  InterestFrame,
  InterestTitle,
  EditButton,
  InterestChipsContainer,
  InterestChip,
  ChipText
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
        <div style={{ position: 'relative' }}>
          <EditButton onClick={handleEditClick}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </EditButton>

          {showEditOptions && (
            <div
              ref={dropdownRef}
              style={{
                position: 'absolute',
                top: '100%',
                right: '0',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                padding: '0',
                minWidth: '120px',
                zIndex: 10,
                overflow: 'hidden',
              }}
            >
              <button
                onClick={handleAddNew}
                onMouseEnter={() => setHoveredOption('add')}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: 'none',
                  background: hoveredOption === 'add' ? '#68B6FF' : 'white',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  color: '#374151',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  borderRadius: '0',
                  display: 'block',
                }}
              >
                Add new
              </button>
              <button
                onClick={handleRemove}
                onMouseEnter={() => setHoveredOption('remove')}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: 'none',
                  background: hoveredOption === 'remove' ? '#68B6FF' : 'white',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  color: '#374151',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  borderRadius: '0',
                  display: 'block',
                }}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </InterestFrame>

      <InterestChipsContainer>
        {interests.map((interest) => (
          <InterestChip
            key={interest.id}
            color={interest.color}
            onClick={() => handleChipClick(interest.id)}
            style={{
              cursor: isRemoveMode ? 'pointer' : 'default',
              opacity: isRemoveMode ? 0.7 : 1,
              transform: isRemoveMode ? 'scale(0.95)' : 'scale(1)',
              transition: 'all 0.2s ease',
              border: isRemoveMode ? '2px dashed #ff4444' : 'none',
            }}
          >
            {editingChip === interest.id ? (
              <input
                type="text"
                value={interest.text}
                onChange={(e) => handleChipTextChange(interest.id, e.target.value)}
                onBlur={handleChipTextBlur}
                onKeyDown={(e) => handleChipKeyDown(e, interest.id)}
                autoFocus
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
                placeholder="Enter interest..."
              />
            ) : (
              <ChipText>{interest.text || "New Interest"}</ChipText>
            )}
          </InterestChip>
        ))}
      </InterestChipsContainer>

      {isRemoveMode && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '0.875rem',
          zIndex: 20,
          pointerEvents: 'none',
        }}>
          Click on a chip to remove it
        </div>
      )}
    </InterestContainer>
  );
};

export default Interest;