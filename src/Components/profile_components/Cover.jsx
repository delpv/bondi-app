
import Parse from "../../utils/parseConfig.js";
import React, { useState, useEffect, useRef } from 'react'
import Avatar from "/public/avatar.png";
import CoverBackground from "../../assets/images/profile-images/cover_background.jpg";
import EditProfileIcon from "../../assets/Icons/edit-profile.svg?react";
import Calendar2Icon from "../../assets/Icons/calendar2.svg?react";
import CameraIcon from "../../assets/Icons/camera.svg?react";
import {
  CoverContainer,
  ProfileCover,
  CoverOverlay,
  CoverContent,
  ProfileAvatarContainer,
  ProfileAvatar,
  CameraIconButton,
  ProfileInfoCard,
  ProfileName,
  MemberSince,
  StatsContainer,
  StatBadge,
  ActionButtons,
  ActionButton,
  EditProfileButton,
  CalendarButton,
  CameraDropdown,
  CameraDropdownOption,
  EditModalOverlay,
  EditModalContainer,
  EditModalTitle,
  EditModalField,
  EditModalLabel,
  EditModalInput,
  EditModalButtonGroup,
  EditModalActions,
  EditModalButton
} from "../styled/profile-style-comp/Cover.styled";

const Cover = () => {
  const [showCameraOptions, setShowCameraOptions] = useState(false);
  const [hoveredOption, setHoveredOption] = useState('take');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState('');
  
  const currentUserId = "yESQnpupOj";
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);
  const coverInputRef = useRef(null);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      setIsLoading(true);
      const User = Parse.Object.extend("USER");
      const query = new Parse.Query(User);
      const user = await query.get(currentUserId);
      
      const profilePictureFile = user.get("profilePicture");
      const coverPhotoFile = user.get("coverPhoto");
      
      const userData = {
        id: user.id,
        username: user.get("username"),
        fullName: user.get("fullName"),
        aboutMe: user.get("aboutMe"),
        email: user.get("email"),
        profilePicture: profilePictureFile ? profilePictureFile.url() : null,
        coverPhoto: coverPhotoFile ? coverPhotoFile.url() : null,
        createdAt: user.get("createdAt")
      };
      
      console.log('Loaded user data:', userData);
      console.log('Profile picture URL:', userData.profilePicture);
      console.log('Final image src will be:', userData.profilePicture ? `${userData.profilePicture}?t=${Date.now()}` : Avatar);
      setUserData(userData);
    } catch (error) {
      console.error('Database error details:', error);
      console.error('Error message:', error.message);
      console.error('Error code:', error.code);
      alert(`Database Error: ${error.message}. Check console for details.`);
    } finally {
      setIsLoading(false);
    }
  };



  const handleCameraClick = () => {
    setShowCameraOptions(!showCameraOptions);
    if (!showCameraOptions) {
      setHoveredOption('take');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCameraOptions(false);
      }
    };

    if (showCameraOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCameraOptions]);

  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();
      
      setTimeout(() => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        
        canvas.toBlob(async (blob) => {
          try {
            setIsLoading(true);
            const parseFile = new Parse.File(`profile-${Date.now()}.jpg`, blob);
            await parseFile.save();
            
            const User = Parse.Object.extend("USER");
            const query = new Parse.Query(User);
            const user = await query.get(currentUserId);
            user.set("profilePicture", parseFile.url());
            await user.save();
            
            await loadUserData();
          } catch (error) {
            console.error('Failed to save photo:', error);
          } finally {
            setIsLoading(false);
          }
        });
        
        stream.getTracks().forEach(track => track.stop());
      }, 3000);
    } catch (error) {
      console.error('Camera not available:', error);
    }
    setShowCameraOptions(false);
  };

  const handleUploadPhoto = () => {
    fileInputRef.current?.click();
    setShowCameraOptions(false);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        setIsLoading(true);
        const parseFile = new Parse.File(`profile-${Date.now()}.jpg`, file);
        await parseFile.save();
        
        const User = Parse.Object.extend("USER");
        const query = new Parse.Query(User);
        const user = await query.get(currentUserId);
        user.set("profilePicture", parseFile.url());
        await user.save();
        
        await loadUserData();
      } catch (error) {
        console.error('Failed to upload photo:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRemovePhoto = async () => {
    try {
      setIsLoading(true);
      const User = Parse.Object.extend("USER");
      const query = new Parse.Query(User);
      const user = await query.get(currentUserId);
      user.set("profilePicture", null);
      await user.save();
      
      await loadUserData();
    } catch (error) {
      console.error('Failed to remove photo:', error);
    } finally {
      setIsLoading(false);
    }
    setShowCameraOptions(false);
  };

  const handleSaveName = async () => {
    try {
      setIsLoading(true);
      const User = Parse.Object.extend("USER");
      const query = new Parse.Query(User);
      const user = await query.get(currentUserId);
      user.set("fullName", editName);
      await user.save();
      
      await loadUserData();
      setShowEditModal(false);
    } catch (error) {
      console.error('Failed to update name:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCoverFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        setIsLoading(true);
        const parseFile = new Parse.File(`cover-${Date.now()}.jpg`, file);
        await parseFile.save();
        
        const User = Parse.Object.extend("USER");
        const query = new Parse.Query(User);
        const user = await query.get(currentUserId);
        user.set("coverPhoto", parseFile.url());
        await user.save();
        
        await loadUserData();
      } catch (error) {
        console.error('Failed to upload cover photo:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRemoveCoverPhoto = async () => {
    try {
      setIsLoading(true);
      const User = Parse.Object.extend("USER");
      const query = new Parse.Query(User);
      const user = await query.get(currentUserId);
      user.set("coverPhoto", null);
      await user.save();
      
      await loadUserData();
    } catch (error) {
      console.error('Failed to remove cover photo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CoverContainer>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <input
        ref={coverInputRef}
        type="file"
        accept="image/*"
        onChange={handleCoverFileChange}
        style={{ display: 'none' }}
      />
      <ProfileCover style={{ backgroundImage: `url(${userData?.coverPhoto || CoverBackground})` }}>
        <CoverOverlay />
        
        {/* Action buttons */}
        <ActionButtons>
          <CalendarButton>
            <Calendar2Icon />
          </CalendarButton>
          <EditProfileButton onClick={() => {
            setEditName(userData?.fullName || '');
            setShowEditModal(true);
          }}>
            <EditProfileIcon />
          </EditProfileButton>
        </ActionButtons>

        <CoverContent>
          <ProfileAvatarContainer>
            <ProfileAvatar 
              src={userData?.profilePicture ? `${userData.profilePicture}?t=${Date.now()}` : Avatar} 
              alt="User avatar" 
              key={userData?.profilePicture || 'default'}
              onLoad={() => console.log('Image loaded successfully:', userData?.profilePicture)}
              onError={(e) => {
                console.error('Image failed to load:', userData?.profilePicture);
                console.error('Error details:', e);
                e.target.src = Avatar;
              }}
            />
            <CameraIconButton onClick={handleCameraClick}>
              <CameraIcon />
            </CameraIconButton>

            {showCameraOptions && (
              <CameraDropdown ref={dropdownRef}>
                <CameraDropdownOption
                  onClick={handleTakePhoto}
                  onMouseEnter={() => setHoveredOption('take')}
                  disabled={isLoading}
                  isHovered={hoveredOption === 'take'}
                >
                  Take Photo
                </CameraDropdownOption>
                <CameraDropdownOption
                  onClick={handleUploadPhoto}
                  onMouseEnter={() => setHoveredOption('upload')}
                  disabled={isLoading}
                  isHovered={hoveredOption === 'upload'}
                >
                  Upload Photo
                </CameraDropdownOption>
                <CameraDropdownOption
                  onClick={handleRemovePhoto}
                  onMouseEnter={() => setHoveredOption('remove')}
                  disabled={isLoading}
                  isHovered={hoveredOption === 'remove'}
                >
                  Remove Photo
                </CameraDropdownOption>
              </CameraDropdown>
            )}
          </ProfileAvatarContainer>

          <ProfileInfoCard>
            <ProfileName>{userData?.fullName || 'Loading...'}</ProfileName>
            <MemberSince>Member since {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Loading...'}</MemberSince>
          </ProfileInfoCard>

          <StatsContainer>
            <StatBadge>11 activities joined</StatBadge>
            <StatBadge>Copenhagen, Denmark</StatBadge>
          </StatsContainer>
        </CoverContent>
      </ProfileCover>
      
      {showEditModal && (
        <EditModalOverlay>
          <EditModalContainer>
            <EditModalTitle>
              Edit Profile
            </EditModalTitle>
            
            <EditModalField>
              <EditModalLabel>
                Full Name
              </EditModalLabel>
              <EditModalInput
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Enter your full name"
              />
            </EditModalField>
            
            <EditModalField>
              <EditModalLabel>
                Cover Photo
              </EditModalLabel>
              <EditModalButtonGroup>
                <EditModalButton
                  variant="primary"
                  size="small"
                  onClick={() => coverInputRef.current?.click()}
                  disabled={isLoading}
                >
                  Upload Cover
                </EditModalButton>
                <EditModalButton
                  variant="danger"
                  size="small"
                  onClick={handleRemoveCoverPhoto}
                  disabled={isLoading}
                >
                  Remove Cover
                </EditModalButton>
              </EditModalButtonGroup>
            </EditModalField>
            
            <EditModalActions>
              <EditModalButton
                variant="secondary"
                onClick={() => setShowEditModal(false)}
                disabled={isLoading}
              >
                Cancel
              </EditModalButton>
              <EditModalButton
                variant="success"
                onClick={handleSaveName}
                disabled={isLoading || !editName.trim()}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </EditModalButton>
            </EditModalActions>
          </EditModalContainer>
        </EditModalOverlay>
      )}
    </CoverContainer>
  )
}

export default Cover
