import React, { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../context/AuthContext.jsx";

export default function Feed() {
  const { user } = useContext(AuthContext);

  const [activities, setActivites] = useState(undefined);
  const [filteredActivities, setFilteredActivities] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = (filters) => {
    console.log("Applied Filters:", filters);

    if (!activities) return;

    let filtered = [...activities];

    // Filter by search query (title)
    if (filters.query && filters.query.trim() !== "") {
      filtered = filtered.filter((activity) =>
        activity.Title.toLowerCase().includes(filters.query.toLowerCase())
      );
    }

    // Filter by category
    if (filters.category && filters.category.trim() !== "") {
      filtered = filtered.filter((activity) => {
        const categoryName =
          activity.category_id?.name || activity.category?.name || "";
        return categoryName.toLowerCase() === filters.category.toLowerCase();
      });
    }

    // Filter by location
    if (filters.location && filters.location.trim() !== "") {
      filtered = filtered.filter((activity) =>
        activity.location
          ?.toLowerCase()
          .includes(filters.location.toLowerCase())
      );
    }

    // Filter by price
    if (filters.priceType) {
      if (filters.priceType === "free") {
        filtered = filtered.filter((activity) => activity.price === 0);
      } else if (filters.priceType === "paid") {
        filtered = filtered.filter((activity) => activity.price > 0);
      }
    }

    setFilteredActivities(filtered);
  };

  const handleReset = () => {
    setFilteredActivities(activities || []);
  };

  const getActivities = async () => {
    const query = new Parse.Query("Activity");
    query.include("category_id");
    setIsLoading(true);
    try {
      const activitiesArray = await query.find();
      const allActivities = activitiesArray.map((activity) => {
        const json = activity.toJSON();
        console.log("Single activity structure:", json);
        return json;
      });

      console.log("Activities with categories:", allActivities);
      setActivites(allActivities);
      setFilteredActivities(allActivities);
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
                    userId={user.objectId}
                    id={activity.objectId}
                    image={activity.coverPhoto_img}
                    date={activity.dateStart.iso}
                    priceLabel={activity.price === 0 ? "Free" : "Paid"}
                    title={activity.Title}
                    description={activity.description}
                    hostId={activity.host_ID.objectId}
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
