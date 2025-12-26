import { describe, test, expect } from "vitest";
import { filterActivities } from "./filterService.js";

describe("filterActivities", () => {
  const mockActivities = [
    {
      Title: "Beach Volleyball",
      activity: {
        location: "Santa Monica Beach",
        price: 0,
      },
      category: { name: "Sports" },
    },
    {
      Title: "Yoga Class",
      activity: {
        location: "Downtown Studio",
        price: 20,
      },
      category: { name: "Fitness" },
    },
    {
      Title: "Beach Run",
      activity: {
        location: "Venice Beach",
        price: 0,
      },
      category: { name: "Community" },
    },
  ];

  test("should filter activities by search query (title)", () => {
    const filters = { query: "beach" };
    const result = filterActivities(mockActivities, filters);

    expect(result).toHaveLength(2);
    expect(result[0].Title).toBe("Beach Volleyball");
    expect(result[1].Title).toBe("Beach Run");
  });

  test("should filter activities by category", () => {
    const filters = { category: "Sports" };
    const result = filterActivities(mockActivities, filters);

    expect(result).toHaveLength(1);
    expect(result[0].Title).toBe("Beach Volleyball");
  });

  test("should filter activities by location", () => {
    const filters = { location: "Downtown Studio" };
    const result = filterActivities(mockActivities, filters);

    expect(result).toHaveLength(1);
    expect(result[0].Title).toBe("Yoga Class");
  });

  test("should filter activities by location and price", () => {
    const filter = { location: "Santa Monica Beach", priceType: "free" };
    const result = filterActivities(mockActivities, filter);

    expect(result).toHaveLength(1);
    expect(result[0].Title).toBe("Beach Volleyball");
  });

  test("should filter activities by location and price with no result", () => {
    const filter = { location: "Santa Monica Beach", priceType: "paid" };
    const result = filterActivities(mockActivities, filter);

    expect(result).toHaveLength(0);
  });

  describe("should filter activities by price", () => {
    test("should filter activities by price type (free)", () => {
      const filters = { priceType: "free" };
      const result = filterActivities(mockActivities, filters);

      expect(result).toHaveLength(2);
      expect(result[0].activity.price).toBe(0);
      expect(result[1].activity.price).toBe(0);
    });

    test("should filter activities by price type (paid)", () => {
      const filters = { priceType: "paid" };
      const result = filterActivities(mockActivities, filters);

      expect(result).toHaveLength(1);
      expect(result[0].activity.price).toBeGreaterThan(0);
      expect(result[0].activity.price).toBe(20);
    });
  });
});
