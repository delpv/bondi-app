import Parse from "parse";

/**
 * Fetch participants for a specific activity
 */
export const fetchActivityParticipants = async (activityId) => {
  try {
    const Activity = Parse.Object.extend("Activity");
    const activityPtr = Activity.createWithoutData(activityId);

    const query = new Parse.Query("Participation");
    query.equalTo("activity_id", activityPtr);
    query.include("user_id");

    const results = await query.find();

    return results.map((p) => {
      const user = p.get("user_id");
      return user ? user.get("fullName") || user.get("username") : "Unknown";
    });
  } catch (error) {
    console.error("Error fetching participants:", error);
    throw error;
  }
};

/**
 * Create a new activity
 */
export const createActivity = async (activityData, currentUser) => {
  if (!currentUser) {
    throw new Error("User must be logged in to create an activity");
  }

  const {
    title,
    description,
    location,
    date,
    time,
    endTime,
    max,
    isPublic,
    price,
    categoryId,
    imageFile,
  } = activityData;

  // Validate required fields
  if (!title || !description || !date || !time || !endTime) {
    throw new Error("Please fill in all required fields");
  }

  // Create dates
  const startDate = new Date(`${date}T${time}`);
  const endDate = new Date(`${date}T${endTime}`);

  if (endDate <= startDate) {
    throw new Error("End time must be after start time");
  }

  try {
    const Activity = Parse.Object.extend("Activity");
    const activity = new Activity();

    activity.set("Title", title.trim());
    activity.set("description", description.trim());
    activity.set("location", location.trim());
    activity.set("time", `${time}-${endTime}`);
    activity.set("dateStart", startDate);
    activity.set("dateEnd", endDate);
    activity.set("price", price);
    activity.set("maxCapacity", max && max.trim() !== "" ? Number(max) : 0);
    activity.set("isPrivate", !isPublic);
    activity.set("participantCount", 0);
    activity.set("host_ID", currentUser);
    activity.set("createdBy", currentUser);

    // Set category if provided
    if (categoryId) {
      const Category = Parse.Object.extend("Category");
      const category = new Category();
      category.id = categoryId;
      activity.set("category_id", category);
    }

    // Upload image if provided
    if (imageFile) {
      const parseFile = new Parse.File(imageFile.name, imageFile);
      await parseFile.save();
      activity.set("coverPhoto_img", parseFile);
    }

    await activity.save();
    return activity;
  } catch (error) {
    console.error("Error creating activity:", error);
    throw error;
  }
};

/**
 * Fetch all categories
 */
export const fetchCategories = async () => {
  try {
    const Category = Parse.Object.extend("Category");
    const query = new Parse.Query(Category);
    query.ascending("name");
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
