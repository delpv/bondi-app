import Parse from "parse";

//fetch all activities from Parse

export const fetchActivities = async () => {
  const query = new Parse.Query("Activity");
  query.include("category_id");

  try {
    const result = await Parse.Cloud.run("getActivitiesWithExtraDetails");
    return result;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

//fetch all categories from Parse

export const fetchCategories = async () => {
  const Category = Parse.Object.extend("Category");
  const query = new Parse.Query(Category);
  query.ascending("name");

  try {
    const results = await query.find();
    return results.map((cat) => ({
      id: cat.id,
      name: cat.get("name") || "Unnamed category",
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
