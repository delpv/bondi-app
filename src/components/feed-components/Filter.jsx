import react from "react";
import { useState } from "react";
import SearchIcon from "../../assets/icons_app/search.svg?react";
import LocationIcon from "../../assets/icons_app/map-pin.svg?react";
import FilterIcon from "../../assets/icons_app/filter-icon.svg?react";
import {
  FilterWrapper,
  FilterHeader,
  Icon,
  FilterTitle,
  FilterBody,
  Section,
  Label,
  TextInput,
  Select,
  Buttons,
  ApplyButton,
  ResetButton,
} from "../styled/feed-style-comp/Filter.styled.jsx";

export default function Filter({ onApply = () => {}, onReset = () => {} }) {
  const [query, setQuery] = react.useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [location, setLocation] = useState("");

  function handleApply(e) {
    e.preventDefault();
    onApply({ query, category, date, sortBy, location });
  }

  function handleReset(e) {
    e.preventDefault();
    setQuery("");
    setCategory("");
    setDate("");
    setSortBy("");
    setLocation("");
    onReset();
  }

  return (
    <FilterWrapper>
      <FilterHeader>
        <Icon>
          <FilterIcon />
        </Icon>
        <FilterTitle>Filters</FilterTitle>
      </FilterHeader>

      <FilterBody as="form" onSubmit={handleApply}>
        <Section>
          <Label>Search</Label>
          <TextInput>
            <span className="left-icon">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search activities..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </TextInput>
        </Section>

        <Section>
          <Label>Category</Label>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="sport">Sport</option>
            <option value="food">Food</option>
            <option value="arts">Arts</option>
            <option value="music">Music</option>
            <option value="technology">Technology</option>
            <option value="travel">Travel</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="outdoors">Outdoors</option>
          </Select>
        </Section>

        <Section>
          <Label>Date</Label>
          <Select value={date} onChange={(e) => setDate(e.target.value)}>
            <option value="">Any Time</option>
            <option value="today">Today</option>
            <option value="week">This week</option>
            <option value="month">This month</option>
          </Select>
        </Section>

        <Section>
          <Label>Sort by</Label>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="distance">Distance</option>
          </Select>
        </Section>

        <Section>
          <Label>Location</Label>
          <TextInput>
            <span className="left-icon">
              <LocationIcon />
            </span>
            <input
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </TextInput>
        </Section>

        <Buttons>
          <ApplyButton type="submit">Apply Filters</ApplyButton>
          <ResetButton type="button" onClick={handleReset}>
            Reset Filters
          </ResetButton>
        </Buttons>
      </FilterBody>
    </FilterWrapper>
  );
}
