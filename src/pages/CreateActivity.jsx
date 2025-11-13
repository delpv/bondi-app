import React, { useState } from "react";

import NavBar from "../Components/feed-components/NavBar.jsx";
import Footer from "../Components/feed-components/Footer.jsx";
import { MainContainer } from "../Components/styled/MiddleSection/Middle.styled.jsx";

import {
  FormWrapper,
  FieldRow,
  Actions,
  Primary,
  Secondary,
  SectionHeader,
} from "../Components/styled/create-activity-style-comp/CreateActivity.styled.jsx";

import {
  TextField,
  TextArea,
  SelectField,
  CheckboxField,
} from "../Components/create-activity-components/Fields.jsx";

import AddImage from "../Components/create-activity-components/AddImage.jsx";

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

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (k === "imageFile") {
        if (v) formData.append("image", v);
      } else if (k !== "imagePreview") {
        formData.append(k, v);
      }
    });

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
