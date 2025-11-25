import React from 'react';
import {
  RecentActivitiesContainer,
  HeaderFrame,
  TitleSection,
  SectionTitle,
  ActivitiesContent,
  ActivityImageContainer,
  ActivityImage,
  ActivityOverlay
} from "../styled/profile-style-comp/RecentActivities.styled";
import walkInNature from "../../assets/images/profile-images/walkInNature.jpg";
import vintage from "../../assets/images/profile-images/vintage.jpg";
import beachDay from "../../assets/images/profile-images/beachDay.jpg";

const RecentActivities = () => {
  // Sample activities data
  const activities = [
    {
      id: 1,
      image: walkInNature,
      title: "Walk in nature",
      alt: "Nature walking activity"
    },
    {
      id: 2,
      image: vintage,
      title: "Vintage treasure hunt",
      alt: "Vintage treasure hunt activity"
    },
    {
      id: 3,
      image: beachDay,
      title: "Beach day",
      alt: "Beach day activity"
    }
  ];

  const handleActivityClick = (activity) => {
    console.log(`Clicked on activity: ${activity.title}`);
  };

  // Helper function for handling activity image load errors
  const handleActivityImageError = (e, activity) => {
    e.target.src = `https://via.placeholder.com/280x120/e5e7eb/9ca3af?text=${encodeURIComponent(activity.title)}`;
  };

  return (
    <RecentActivitiesContainer>
      <HeaderFrame>
        <TitleSection>
          <SectionTitle>Recent Activities</SectionTitle>
        </TitleSection>
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
              onError={(e) => handleActivityImageError(e, activity)}
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