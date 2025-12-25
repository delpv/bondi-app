import Parse from 'parse';

/** 
 * Fetch all activities from Parse 
 * @returns {Promise<Array>} - A promise that resolves to an array of activities
 */

export const fetchActivities = async () => {
    const query = new Parse.Query("Activity");
    query.include("category_id");

    try {
        const activitiesArray = await query.find();
        const allActivities = activitiesArray.map((activity) => activity.toJSON());
        return allActivities;
    } catch (error) {
        console.error("Error fetching activities:", error);
        throw error;
    }
};

/**
 * Fetch all categories from Parse
 * @returns {Promise<Array>} Array of categories
 */
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