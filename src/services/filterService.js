import Parse from "parse";

//filter activities based on various criteria

export const filterActivities = (activities, filters) => {
  console.log("Applied Filters:", filters);

  if (!activities) return [];

  let filtered = [...activities];

  // filter by search query (title)
  if (filters.query && filters.query.trim() !== "") {
    filtered = filtered.filter((activity) =>
      activity.activity.Title.toLowerCase().includes(
        filters.query.toLowerCase()
      )
    );
  }

  // filter by category
  if (filters.category && filters.category.trim() !== "") {
    filtered = filtered.filter((activity) => {
      const categoryName = activity.category?.name || "";
      console.log("Comparing:", categoryName, "with filter:", filters.category);
      return categoryName.toLowerCase() === filters.category.toLowerCase();
    });
  }

  // filter by location
  if (filters.location && filters.location.trim() !== "") {
    filtered = filtered.filter((activity) =>
      activity.activity.location
        ?.toLowerCase()
        .includes(filters.location.toLowerCase())
    );
  }

  // filter by price
  if (filters.priceType) {
    if (filters.priceType === "free") {
      filtered = filtered.filter((activity) => activity.activity.price === 0);
    } else if (filters.priceType === "paid") {
      filtered = filtered.filter((activity) => activity.activity.price > 0);
    }
  }

  return filtered;
};
