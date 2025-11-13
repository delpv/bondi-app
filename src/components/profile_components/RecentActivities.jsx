import React from 'react';
import {
  RecentActivitiesContainer,
  HeaderFrame,
  TitleSection,
  SectionTitle,
  ActionsSection,
  ViewAllLink,
  EditButton,
  ActivitiesContent,
  ActivityImageContainer,
  ActivityImage,
  ActivityOverlay
} from "../styled/profile-style-comp/RecentActivities.styled";
import activityImage1 from "../../assets/images/profile-images/activity-image-5.png";
import activityImage2 from "../../assets/images/profile-images/activity-image-4.png";
import activityImage3 from "../../assets/images/profile-images/activity-image-3.png";

const RecentActivities = () => {
  // Sample activities data
  const activities = [
    {
      id: 1,
      image: activityImage1,
      title: "Walk in nature",
      alt: "Nature walking activity"
    },
    {
      id: 2,
      image: activityImage3,
      title: "Vintage treasure hunt",
      alt: "Vintage treasure hunt activity"
    },
    {
      id: 3,
      image: activityImage2,
      title: "Beach day",
      alt: "Beach day activity"
    }
  ];

  const handleActivityClick = (activity) => {
    console.log(`Clicked on activity: ${activity.title}`);
    // Here you can add navigation to activity detail page
    // For example: navigate(`/activity/${activity.id}`);
  };

  return (
    <RecentActivitiesContainer>
      <HeaderFrame>
        <TitleSection>
          <SectionTitle>Recent Activities</SectionTitle>
        </TitleSection>

        <ActionsSection>
          <ViewAllLink href="#" onClick={(e) => e.preventDefault()}>
            View all
          </ViewAllLink>
          <EditButton>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </EditButton>
        </ActionsSection>
      </HeaderFrame>

      <ActivitiesContent>
        {activities.map((activity) => (
          <ActivityImageContainer
            key={activity.id}
            onClick={() => handleActivityClick(activity)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleActivityClick(activity);
              }
            }}
          >
            <ActivityImage
              src={activity.image}
              alt={activity.alt}
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/280x120/e5e7eb/9ca3af?text=${encodeURIComponent(activity.title)}`;
              }}
            />
            <ActivityOverlay>
              {activity.title}
            </ActivityOverlay>
          </ActivityImageContainer>
        ))}
      </ActivitiesContent>
    </RecentActivitiesContainer>
  );
};

export default RecentActivities;