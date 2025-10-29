import React, { useState } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { MainContainer } from "../components/styled/Middle.styled.jsx";
import { SectionHeader } from "../components/styled/Feed.styled.jsx";
import styled from "styled-components";

const FormWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(18, 22, 25, 0.08);
  padding: 32px;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  label {
    font-weight: 600;
    color: #333;
  }

  input,
  textarea,
  select {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 0.95rem;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const Primary = styled.button`
  background: #2d936c;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: #1a6840; }
`;
const Secondary = styled.button`
  background: white;
  color: #1a6840;
  border: 1px solid #1a6840;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`;

export default function CreateActivity() {
  const [data, setData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    max: "",
    isPublic: true,
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
            <Field>
              <label htmlFor="title">Activity Title</label>
              <input
                id="title"
                name="title"
                placeholder="e.g., Morning Café & Chat"
                value={data.title}
                onChange={onChange}
                required
              />
            </Field>

            <Field>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Tell people what to expect from this activity…"
                value={data.description}
                onChange={onChange}
              />
            </Field>

            <Field>
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                placeholder="Enter address or venue name…"
                value={data.location}
                onChange={onChange}
              />
            </Field>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Field>
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" value={data.date} onChange={onChange} />
              </Field>
              <Field>
                <label htmlFor="time">Time</label>
                <input id="time" name="time" type="time" value={data.time} onChange={onChange} />
              </Field>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Field>
                <label htmlFor="max">Maximum participants</label>
                <input
                  id="max"
                  name="max"
                  type="number"
                  min="0"
                  placeholder="Leave empty for unlimited"
                  value={data.max}
                  onChange={onChange}
                />
              </Field>
              <Field>
                <label>
                  <input
                    type="checkbox"
                    name="isPublic"
                    checked={data.isPublic}
                    onChange={onChange}
                  />{" "}
                  Public Activity
                </label>
              </Field>
            </div>

            <Buttons>
              <Secondary type="button" onClick={() => alert("Draft saved (demo)")}>
                Save draft
              </Secondary>
              <Primary type="submit">Publish Activity</Primary>
            </Buttons>
          </form>
        </FormWrapper>
      </MainContainer>
      <Footer />
    </>
  );
}
