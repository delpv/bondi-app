import React, { useState, useEffect } from "react";
import Parse from "parse";
import {
  EditModalOverlay,
  EditModalContainer,
  EditModalTitle,
  EditModalField,
  EditModalLabel,
  EditModalInput,
  EditModalActions,
  EditModalSecondaryButton,
  EditModalSuccessButton,
} from "../styled/profile-style-comp/Cover.styled";

import toast from "react-hot-toast";

const EditModal = ({ 
  isOpen, 
  onClose, 
  userData, 
  currentUserId, 
  onSaveSuccess 
}) => {
  const [editName, setEditName] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState("");
  const [coverPhotoFile, setCoverPhotoFile] = useState(null);
  const [coverPhotoPreview, setCoverPhotoPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize edit name and address when modal opens
  useEffect(() => {
    if (isOpen && userData?.fullName) {
      setEditName(userData.fullName);
    }
    if (isOpen && userData?.address) {
      setEditAddress(userData.address);
    }
  }, [isOpen, userData?.fullName, userData?.address]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePictureFile(file);
      setProfilePicturePreview(URL.createObjectURL(file));
    }
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverPhotoFile(file);
      setCoverPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);

      // Get current user for _USER table updates
      const User = Parse.Object.extend("_User");
      const query = new Parse.Query(User);
      const user = await query.get(currentUserId);
      
      // Save full name to _USER table
      if (editName.trim()) {
        user.set("fullName", editName.trim());
        await user.save();
      }

      // Get user_Info pointer for profile data
      const userInfoPtr = user.get("user_Info");
      if (userInfoPtr) {
        const userInfo = userInfoPtr.fetch ? await userInfoPtr.fetch() : userInfoPtr;
        
        // Upload and save profile picture if selected
        if (profilePictureFile) {
          const parseFile = new Parse.File(profilePictureFile.name, profilePictureFile);
          await parseFile.save();
          userInfo.set("profilePicture", parseFile);
        }
        
        // Upload and save cover photo if selected
        if (coverPhotoFile) {
          const parseFile = new Parse.File(coverPhotoFile.name, coverPhotoFile);
          await parseFile.save();
          userInfo.set("coverPhoto", parseFile);
        }
        
        // Save address if changed
        if (editAddress.trim() !== userData?.address) {
          userInfo.set("address", editAddress.trim());
        }
        
        // Save user_Info changes
        await userInfo.save();
      }

      // Reset form state
      setEditAddress("");
      setProfilePictureFile(null);
      setProfilePicturePreview("");
      setCoverPhotoFile(null);
      setCoverPhotoPreview("");

      // Notify parent to refresh data and close modal
      await onSaveSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error(`Failed to update profile: ${error.message || "Unknown error"}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Reset form state when closing
    setEditName(userData?.fullName || "");
    setEditAddress(userData?.address || "");
    setProfilePictureFile(null);
    setProfilePicturePreview("");
    setCoverPhotoFile(null);
    setCoverPhotoPreview("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <EditModalOverlay>
      <EditModalContainer>
        <EditModalTitle>Edit Profile</EditModalTitle>

        <EditModalField>
          <EditModalLabel>Full Name</EditModalLabel>
          <EditModalInput
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Enter your full name"
          />
        </EditModalField>

        <EditModalField>
          <EditModalLabel>Address</EditModalLabel>
          <EditModalInput
            type="text"
            value={editAddress}
            onChange={(e) => setEditAddress(e.target.value)}
            placeholder="Enter your address (e.g., Copenhagen, Denmark)"
          />
        </EditModalField>

        <EditModalField>
          <EditModalLabel>Change Profile Picture</EditModalLabel>
          <EditModalInput
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          {profilePicturePreview && (
            <div style={{ marginTop: '8px' }}>
              <img 
                src={profilePicturePreview} 
                alt="Profile picture preview" 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  objectFit: 'cover', 
                  borderRadius: '8px' 
                }}
              />
            </div>
          )}
        </EditModalField>

        <EditModalField>
          <EditModalLabel>Change Cover Photo</EditModalLabel>
          <EditModalInput
            type="file"
            accept="image/*"
            onChange={handleCoverPhotoChange}
          />
          {coverPhotoPreview && (
            <div style={{ marginTop: '8px' }}>
              <img 
                src={coverPhotoPreview} 
                alt="Cover photo preview" 
                style={{ 
                  width: '120px', 
                  height: '60px', 
                  objectFit: 'cover', 
                  borderRadius: '8px' 
                }}
              />
            </div>
          )}
        </EditModalField>

        <EditModalActions>
          <EditModalSecondaryButton
            onClick={handleClose}
            disabled={isLoading}
          >
            Cancel
          </EditModalSecondaryButton>
          <EditModalSuccessButton
            onClick={handleSave}
            disabled={isLoading || !editName.trim()}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </EditModalSuccessButton>
        </EditModalActions>
      </EditModalContainer>
    </EditModalOverlay>
  );
};

export default EditModal;