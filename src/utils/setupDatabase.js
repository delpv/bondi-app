import Parse from "./parseConfig";

/**
 * Added sample activities to existing Activity table
 */
export async function setupDatabase() {
    console.log("Adding sample activities...");

    try {
        await seedActivities();
        console.log("Sample data added!");
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to add data:", error);
        throw error;
    }
}

async function seedActivities() {
    console.log("Adding sample activities...");

    const sampleActivities = [{
            title: "Morning Yoga Session",
            description: "Start your day with a relaxing yoga session in the park. All levels welcome!",
            dateStart: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Match your column name
            price: 15,
            location: new Parse.GeoPoint(40.785091, -73.968285), //random coordinates
            maxCapacity: 20,
            category: "Sport",
            imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
        },
        {
            title: "Italian Cooking Class",
            description: "Learn to make authentic Italian pasta from scratch with a professional chef.",
            dateStart: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            price: 45,
            location: new Parse.GeoPoint(40.730610, -73.935242),
            maxCapacity: 12,
            category: "Food",
            imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
        },
        {
            title: "Live Jazz Night",
            description: "Enjoy an evening of smooth jazz with local musicians.",
            dateStart: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
            price: 25,
            location: new Parse.GeoPoint(40.731253, -73.997332),
            maxCapacity: 50,
            category: "Music",
            imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800",
        },
        {
            title: "Painting Workshop",
            description: "Explore watercolor techniques in this beginner-friendly art workshop.",
            dateStart: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
            price: 35,
            location: new Parse.GeoPoint(40.774574, -73.969063),
            maxCapacity: 15,
            category: "Arts",
            imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
        },
        {
            title: "Networking Mixer",
            description: "Meet fellow professionals in tech and startups.",
            dateStart: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
            price: 0,
            location: new Parse.GeoPoint(37.774929, -122.419416),
            maxCapacity: 100,
            category: "Social",
            imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
        },
        {
            title: "Photography Basics",
            description: "Learn the fundamentals of photography with hands-on practice.",
            dateStart: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            price: 50,
            location: new Parse.GeoPoint(40.678178, -73.944158),
            category: "Education",
            imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800",
        },
    ];

    const Activity = Parse.Object.extend("Activity");

    for (const activityData of sampleActivities) {
        const query = new Parse.Query(Activity);
        query.equalTo("title", activityData.title);
        const existing = await query.first();

        if (!existing) {
            const activity = new Activity();

            activity.set("title", activityData.title);
            activity.set("description", activityData.description);
            activity.set("dateStart", activityData.dateStart);
            activity.set("price", activityData.price);
            activity.set("location", activityData.location); // Using GeoPoint
            activity.set("maxCapacity", activityData.maxCapacity);
            activity.set("category", activityData.category);
            activity.set("imageUrl", activityData.imageUrl);

            const acl = new Parse.ACL();
            acl.setPublicReadAccess(true);
            acl.setPublicWriteAccess(true);
            activity.setACL(acl);

            try {
                await activity.save();
                console.log(`Created: ${activityData.title}`);
            } catch (error) {
                console.error(`Failed to create ${activityData.title}:`, error.message);
            }
        } else {
            console.log(` Already exists: ${activityData.title}`);
        }
    }
}

export async function listActivities() {
    try {
        const Activity = Parse.Object.extend("Activity");
        const query = new Parse.Query(Activity);
        query.limit(100);
        query.ascending("dateStart");

        const activities = await query.find();

        console.log(`Found ${activities.length} activities:`);
        activities.forEach((activity) => {
            console.log(`  - ${activity.get("title")} | ${activity.get("category")} | $${activity.get("price")}`);
        });

        return activities;
    } catch (error) {
        console.error("Failed to list activities:", error);
        throw error;
    }
}

export async function clearActivities() {
    console.log(" Deleting all activities...");

    try {
        const Activity = Parse.Object.extend("Activity");
        const query = new Parse.Query(Activity);
        query.limit(1000);

        const activities = await query.find();

        if (activities.length === 0) {
            console.log(" No activities to delete");
            return {
                deleted: 0
            };
        }

        await Parse.Object.destroyAll(activities);
        console.log(` Deleted ${activities.length} activities`);
        return {
            deleted: activities.length
        };
    } catch (error) {
        console.error("Failed to delete activities:", error);
        throw error;
    }
}