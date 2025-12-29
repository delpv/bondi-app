import React, { useState } from "react";
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
  SectionHeader,
} from "../components/styled/create-activity-style-comp/CreateActivity.styled.jsx";

import {
  TextField,
  TextArea,
  SelectField,
  CheckboxField,
} from "../components/create-activity-components/Fields.jsx";

import AddImage from "../components/create-activity-components/AddImage.jsx";

import { createActivity } from "../services/activityService";
import { useCategories } from "../hooks/useCategories";
import { parsePrice } from "../services/priceUtility";

export default function CreateActivity() {
  const user = Parse.User.current();
  const navigate = useNavigate();

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

  const { categories, isLoading: isLoadingCategories } = useCategories();

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

    if (!user) {
      alert("You need to be logged in to create an activity.");
      return;
    }

    setIsSaving(true);

    try {
      const price = parsePrice(data.priceLabel);

      await createActivity(
        {
          ...data,
          price,
        },
        user
      );

      alert("Activity created successfully!");
      navigate("/feed");
    } catch (error) {
      alert(
        error.message || "Something went wrong while creating the activity."
      );
      console.error("Create activity error:", error);
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

            <TextField
              id="title"
              name="title"
              label="Activity Title"
              placeholder="e.g., Morning Coffee & Chat"
              value={data.title}
              onChange={onChange}
              required
            />

            <TextArea
              id="description"
              name="description"
              label="Description"
              placeholder="Tell people what to expect from this activity"
              value={data.description}
              onChange={onChange}
            />

            <TextField
              id="location"
              name="location"
              label="Location"
              placeholder="Enter address or venue name"
              value={data.location}
              onChange={onChange}
            />

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

              <TextField
                id="priceLabel"
                name="priceLabel"
                label="Price"
                placeholder="e.g., Free, €10, Donation"
                value={data.priceLabel}
                onChange={onChange}
              />
            </FieldRow>

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
            </FieldRow>

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
