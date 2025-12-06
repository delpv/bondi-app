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
} from "../components/styled/feed-style-comp/Grid.styled.jsx";
import { SectionHeader } from "../components/styled/feed-style-comp/Feed.styled.jsx";
import { fetchActivities } from "../services/parseService.js";
import { filterActivities } from "../services/filterService.js";

export default function Feed() {
  const user = Parse.User.current();

  const [activities, setActivites] = useState(undefined);
  const [filteredActivities, setFilteredActivities] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = (filters) => {
    console.log("Applied Filters:", filters);
    const filtered = filterActivities(activities, filters);
    setFilteredActivities(filtered);
  };

  const handleReset = () => {
    setFilteredActivities(activities || []);
  };

  const loadActivities = async () => {
    setIsLoading(true);
    try {
      const allActivities = await fetchActivities();
      setActivites(allActivities);
      setFilteredActivities(allActivities);
    } catch (error) {
      console.error("Failed to load activities:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadActivities();
  }, []);

  return (
    <>
      <NavBar />
      <MainContainer>
        <LayoutGrid>
          <Filter onApply={handleApply} onReset={handleReset} />

          <div>
            <SectionHeader>
              <h1>Discover Activities</h1>
              <p>Find amazing activities happening around you</p>
            </SectionHeader>

            <GridContainer>
              {isLoading && <p>Loading...</p>}
              {!isLoading && filteredActivities?.length === 0 && activities && (
                <p>No activities found matching your filters.</p>
              )}
              {!isLoading &&
                filteredActivities?.map((activity, index) => (
                  <Card
                    key={`activity-number-${index}`}
                    userId={user?.id}
                    id={activity.objectId}
                    image={activity.coverPhoto_img}
                    date={activity.dateStart.iso}
                    priceLabel={activity.price === 0 ? "Free" : "Paid"}
                    title={activity.Title}
                    description={activity.description}
                    hostId={activity.host_ID ? activity.host_ID.objectId : null}
                    maxParticipants={activity.maxCapacity}
                    location={activity.location}
                  />
                ))}
            </GridContainer>
          </div>
        </LayoutGrid>
      </MainContainer>
      <Footer />
    </>
  );
}
