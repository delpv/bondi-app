import React, { useEffect, useState } from "react";
import Parse from "parse";
import NavBar from "../components/feed-components/NavBar.jsx";
import Footer from "../components/feed-components/Footer.jsx";
import Filter from "../components/feed-components/Filter.jsx";
import Card from "../components/feed-components/Card.jsx";
import { MainContainer } from "../components/styled/activity-detail-comp/Middle.styled.jsx";
import {
  LayoutGrid,
  GridContainer,
} from "../Components/styled/feed-style-comp/Grid.styled.jsx";
import {
  SectionHeader,
  LoadMoreButton,
} from "../Components/styled/feed-style-comp/Feed.styled.jsx";

export default function Feed() {
  const [activities, setActivites] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const handleApply = (filters) => {
    console.log("Applied Filters:", filters);
  };

  const getActivities = async () => {
    const query = new Parse.Query("Activity");
    setIsLoading(true);
    try {
      const activitiesArray = await query.find();
      const allActivities = activitiesArray.map((activity) =>
        activity.toJSON()
      );

      setActivites(allActivities);
      console.log(allActivities);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <>
      <NavBar />
      <MainContainer>
        <LayoutGrid>
          <Filter onApply={handleApply} />

          <div>
            <SectionHeader>
              <h1>Discover Activities</h1>
              <p>Find amazing activities happening around you</p>
            </SectionHeader>

            <GridContainer>
              {activities?.map((activity, index) => (
                <Card
                  key={`activity-number-${index}`}
                  id={activity.objectId}
                  image={activity.coverPhoto}
                  date={activity.dateStart.iso}
                  priceLabel={activity.price === 0 ? "Free" : "Paid"}
                  title={activity.Title}
                  description={activity.description}
                  hostId={activity.host_ID.objectId}
                  maxParticipants={activity.maxCapacity}
                  participantCount={activity.participantCount}
                  location={activity.location}
                  onJoin={() => console.log("Joined:", activity.id)}
                />
              ))}
            </GridContainer>

            <LoadMoreButton>Load More Activities</LoadMoreButton>
          </div>
        </LayoutGrid>
      </MainContainer>
      <Footer />
    </>
  );
}
