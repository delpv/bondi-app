import React, { useState, useEffect } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/feed-components/NavBar.jsx";
import Footer from "../components/feed-components/Footer.jsx";
import { MainContainer } from "../components/styled/MiddleSection/Middle.styled.jsx";

import {
  FormWrapper,
  FieldRow,
  Actions,
  Primary,
  Secondary,
  SectionHeader,
} from "../components/styled/create-activity-style-comp/CreateActivity.styled.jsx";

import {
  TextField,
  TextArea,
  SelectField,
  CheckboxField,
} from "../components/create-activity-components/Fields.jsx";

import AddImage from "../components/create-activity-components/AddImage.jsx";

export default function CreateActivity() {
  const user = Parse.User.current();

  const [data, setData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    endTime: "",
    max: "",
    isPublic: true,
    priceLabel: "Free",
    categoryId: "",
    imageFile: null,
    imagePreview: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const Category = Parse.Object.extend("Category");
        const query = new Parse.Query(Category);
        query.ascending("name");
        const results = await query.find();

        setCategories(
          results.map((cat) => ({
            id: cat.id,
            name: cat.get("name") || "Unnamed category",
          }))
        );
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, [navigate]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((d) => ({ ...d, [name]: type === "checkbox" ? checked : value }));
  };

  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    const preview = file ? URL.createObjectURL(file) : "";
    setData((d) => ({ ...d, imageFile: file, imagePreview: preview }));
  };

  const parsePrice = (rawPrice) => {
    if (!rawPrice) return 0;

    const lower = rawPrice.trim().toLowerCase();
    if (lower === "free") return 0;

    const numericPart = rawPrice.replace(/[^\d.,]/g, "").replace(",", ".");

    const num = parseFloat(numericPart);
    if (isNaN(num)) return 0;
    return num;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You need to be logged in to create an activity.");

      return;
    }

    console.log("DATA BEFORE SUBMIT:", data);
    if (!data.title || !data.description || !data.date || !data.time || !data.endTime) {
      alert("Please fill in title, description, date, start time and end time.");
      return;
    }

    const startDate = new Date(`${data.date}T${data.time}`);
    const endDate = new Date(`${data.date}T${data.endTime}`);

    if (endDate <= startDate) {
      alert("End time must be after start time.");
      return;
    }

    setIsSaving(true);

    try {
      const Activity = Parse.Object.extend("Activity");
      const activity = new Activity();

      activity.set("Title", data.title.trim());
      activity.set("description", data.description.trim());
      activity.set("location", data.location.trim());
      activity.set(
        "time",
        `${data.time}-${data.endTime}`
      );

      activity.set("dateStart", startDate);
      activity.set("dateEnd", endDate);

      const priceNumber = parsePrice(data.priceLabel);
      activity.set("price", priceNumber);

      const maxCapacity =
        data.max && data.max.trim() !== "" ? Number(data.max) : 0;
      activity.set("maxCapacity", maxCapacity);

      activity.set("isPrivate", !data.isPublic);

      activity.set("participantCount", 0);

      activity.set("host_ID", Parse.User.current());
      activity.set("createdBy", Parse.User.current());

      if (data.categoryId) {
        const Category = Parse.Object.extend("Category");
        const category = new Category();
        category.id = data.categoryId;
        activity.set("category_id", category);
      }

      if (data.imageFile) {
        const parseFile = new Parse.File(data.imageFile.name, data.imageFile);
        await parseFile.save();
        activity.set("coverPhoto_img", parseFile);
      }

      await activity.save();

      alert("Activity created successfully!");
      navigate("/feed");
    } catch (error) {
      console.error("Error while creating activity:", error);
      alert("Something went wrong while creating the activity. Check console.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <NavBar />
      <MainContainer>
        <FormWrapper>
          <SectionHeader>
            <h1>Create Activity</h1>
            <p>Share an activity and connect with people in your area</p>
          </SectionHeader>

          <form onSubmit={onSubmit}>
            <AddImage
              id="activityImage"
              label="Add Image"
              onChange={onImageChange}
              preview={data.imagePreview}
            />

            {/* Title */}
            <TextField
              id="title"
              name="title"
              label="Activity Title"
              placeholder="e.g., Morning Coffee & Chat"
              value={data.title}
              onChange={onChange}
              required
            />

            {/* Description */}
            <TextArea
              id="description"
              name="description"
              label="Description"
              placeholder="Tell people what to expect from this activity"
              value={data.description}
              onChange={onChange}
            />

            {/* Location */}
            <TextField
              id="location"
              name="location"
              label="Location"
              placeholder="Enter address or venue name"
              value={data.location}
              onChange={onChange}
            />

            {/* Date & Time */}
            <FieldRow>
              <TextField
                id="date"
                name="date"
                type="date"
                label="Date"
                value={data.date}
                onChange={onChange}
              />
              <TextField
                id="time"
                name="time"
                type="time"
                label="Start time"
                value={data.time}
                onChange={onChange}
              />
              <TextField
                id="endTime"
                name="endTime"
                type="time"
                label="End time"
                value={data.endTime}
                onChange={onChange}
              />
            </FieldRow>  

            {/* Participants */}
            <FieldRow>
              <TextField
                id="max"
                name="max"
                type="number"
                min="0"
                label="Maximum participants"
                placeholder="Leave empty for unlimited"
                value={data.max}
                onChange={onChange}
              />

              {/* Price */}
              <TextField
                id="priceLabel"
                name="priceLabel"
                label="Price"
                placeholder="e.g., Free, €10, Donation"
                value={data.priceLabel}
                onChange={onChange}
              />
            </FieldRow>

            {/* Category */}
            <FieldRow>
              <SelectField
                id="category"
                name="categoryId"
                label="Category"
                value={data.categoryId}
                onChange={onChange}
              >
                <option value="">
                  {isLoadingCategories
                    ? "Loading categories..."
                    : "Select a category"}
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </SelectField>

              {/* Public or Private */}
              <CheckboxField
                id="isPublic"
                name="isPublic"
                label="Public Activity"
                checked={data.isPublic}
                onChange={onChange}
              />
            </FieldRow>

            {/* Buttons */}
            <Actions>
              <Primary type="submit" disabled={isSaving}>
                {isSaving ? "Publishing..." : "Publish Activity"}
              </Primary>
            </Actions>
          </form>
        </FormWrapper>
      </MainContainer>
      <Footer />
    </>
  );
}
