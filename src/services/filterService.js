import Parse from "parse";

/**
 * Filter activities based on various criteria
 * @param {Array} activities - Array of activities to filter
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered activities
 */

export const filterActivities = (activities, filters) => {
  console.log("Applied Filters:", filters);

  if (!activities) return [];

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
        activity.category?.name || activity.category?.name || "";
      return categoryName.toLowerCase() === filters.category.toLowerCase();
    });
  }

  // Filter by location
  if (filters.location && filters.location.trim() !== "") {
    filtered = filtered.filter((activity) =>
      activity.activity.location
        ?.toLowerCase()
        .includes(filters.location.toLowerCase())
    );
  }

  // Filter by price
  if (filters.priceType) {
    if (filters.priceType === "free") {
      filtered = filtered.filter((activity) => activity.activity.price === 0);
    } else if (filters.priceType === "paid") {
      filtered = filtered.filter((activity) => activity.activity.price > 0);
    }
  }

  return filtered;
};
