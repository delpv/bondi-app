import React, { useState } from "react";
import { slugify } from "../utils/slugify";
import Parse from "parse";

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
  const [data, setData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    max: "",
    isPublic: true,
    priceLabel: "Free",
    category: "",
    imageFile: null,
    imagePreview: "",
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((d) => ({ ...d, [name]: type === "checkbox" ? checked : value }));
  };

  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    const preview = file ? URL.createObjectURL(file) : "";
    setData((d) => ({ ...d, imageFile: file, imagePreview: preview }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const Activity = Parse.Object.extend("Activity");
      const activity = new Activity();

      activity.set("Title", data.title);
      activity.set("description", data.description);
      activity.set("location", data.location);
      activity.set("time", data.time);
      activity.set("maxCapacity", data.max ? Number(data.max) : 0);
      activity.set(
        "price",
        data.priceLabel === "Free" ? 0 : Number(data.priceLabel || 0)
      );

      //activity.set("category_id", data.category); // Note: this should be a pointer, see below

      // Combine date + time into dateStart (ISO string or Date object)
      if (data.date && data.time) {
        const dateTime = new Date(`${data.date}T${data.time}:00`);
        activity.set("dateStart", dateTime);
      }

      if (data.date && data.time) {
        const dateTime = new Date(`${data.date}T${data.time}:00`);
        activity.set("dateStart", dateTime);
        activity.set("dateEnd", dateTime); // satisfy required field
      }

      // Set host_ID (you'll need to set this from current user)
      const currentUser = Parse.User.current();
      if (currentUser) {
        activity.set("host_ID", currentUser);
      }

      //slug
      const slug = slugify(data.title);
      activity.set("slug", slug);

      await activity.save();
    } catch (err) {
      console.error("Error creating activity:", err);
    }

    console.log("Create Activity (demo payload):", data);
    alert("Activity saved (demo). Check console for payload.");
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
            {/* Add Image */}
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
              placeholder="Tell people what to expect from this activity…"
              value={data.description}
              onChange={onChange}
            />

            {/* Location */}
            <TextField
              id="location"
              name="location"
              label="Location"
              placeholder="Enter address or venue name…"
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
                label="Time"
                value={data.time}
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
              <TextField
                id="category"
                name="category"
                label="Category"
                placeholder="Type category (e.g., Sports, Food...)"
                value={data.category}
                onChange={onChange}
              />

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
              <Secondary
                type="button"
                onClick={() => alert("Draft saved (demo)")}
              >
                Save draft
              </Secondary>
              <Primary type="submit">Publish Activity</Primary>
            </Actions>
          </form>
        </FormWrapper>
      </MainContainer>
      <Footer />
    </>
  );
}
