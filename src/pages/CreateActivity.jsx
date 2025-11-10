import React, { useState } from "react";
import NavBar from "../components/feed-components/NavBar.jsx";
import Footer from "../components/feed-components/Footer.jsx";
import { MainContainer } from "../components/styled/activity-detail-comp/Middle.styled.jsx";
import { SectionHeader } from "../components/styled/feed-style-comp/Feed.styled.jsx";

import {
  FormWrapper,
  FieldRow,
  Actions,
  Primary,
  Secondary,
} from "../components/CreateActivity/Layout.jsx";

import {
  TextField,
  TextArea,
  SelectField,
  CheckboxField,
} from "../components/CreateActivity/Fields.jsx";

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
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((d) => ({ ...d, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Create Activity:", data);
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
              placeholder="Tell people what to expect from this activity…"
              value={data.description}
              onChange={onChange}
            />

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

            {/* Participants & Price */}
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
              <SelectField
                id="priceLabel"
                name="priceLabel"
                label="Price"
                value={data.priceLabel}
                onChange={onChange}
              >
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
                <option value="Donation">Donation</option>
              </SelectField>
            </FieldRow>

            {/* Category & Public */}
            <FieldRow>
              <SelectField
                id="category"
                name="category"
                label="Category"
                value={data.category}
                onChange={onChange}
              >
                <option value="">Select category</option>
                <option value="sports">Sports</option>
                <option value="food">Food</option>
                <option value="arts">Arts</option>
                <option value="outdoors">Outdoors</option>
                <option value="wellness">Wellness</option>
              </SelectField>

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
