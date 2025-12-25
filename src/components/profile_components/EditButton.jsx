import React, { useRef, useEffect } from "react";
import EditIcon from "../../assets/icons_app/edit.svg?react";
import {
  EditButton,
  EditDropdownContainer,
  EditDropdown as StyledEditDropdown,
  EditDropdownOption,
} from "../styled/profile-style-comp/Interest.styled";

const EditDropdown = ({ isOpen, onToggle, onAddNew, onRemove }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <EditDropdownContainer>
      <EditButton onClick={() => onToggle(!isOpen)}>
        <EditIcon />
      </EditButton>

      {isOpen && (
        <StyledEditDropdown ref={dropdownRef}>
          <EditDropdownOption onClick={onAddNew}>Add new</EditDropdownOption>
          <EditDropdownOption onClick={onRemove}>Remove</EditDropdownOption>
        </StyledEditDropdown>
      )}
    </EditDropdownContainer>
  );
};

export default EditDropdown;
